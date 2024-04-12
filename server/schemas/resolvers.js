const { User, Goal, Post } = require('../models');
const { populate } = require('../models/Post');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('posts').populate('friends').populate('goals').populate({
                path: 'goals',
                populate: 'activities'
            });
        },
        user: async (parent, { userId }) => {
            return User.findOne({ _id: userId }).populate('posts').populate('friends').populate('goals').populate({
                path: 'goals',
                populate: 'activities'
            });
        },
        goals: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Goal.find(params).sort({ createdAt: -1 });
        },
        goal: async (parent, { goalId }) => {
            return Goal.findOne({ _id: goalId });
        },
        posts: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Post.find(params).sort({ createdAt: -1 });
        },
        post: async (parent, { postId }) => {
            return Post.findOne({ _id: postId });
        },
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw AuthenticationError;
            }

            const correctPw = await User.isCorrectPassword(password);

            if (!correctPw) {
                throw AuthenticationError
            }

            const token = signToken(user);

            return { token, user};
        },
        addGoal: async (parent, { goalTitle, username }) => {
            const goal = await Goal.create({ goalTitle, username });

            await User.findOneAndUpdate(
                { username: username },
                { $addToSet: { goals: goal._id }}
            );

            return goal;
        },
        addActivity: async (parent, { goalId, activityText, username }) => {
            return Goal.findOneAndUpdate(
                { _id: goalId },
                {
                    $addToSet: { activities: { activityText, username }},
                },
                {
                    new: true,
                    runValidators: true,
                }
            );
        },
        addPost: async (parent, { postText, username }) => {
            const post = await Post.create({ postText, username });

            await User.findOneAndUpdate(
                { username: username },
                { $addToSet: { posts: post._id }}
            );

            return post;
        },
        addComment: async (parent, { postId, commentText, username }) => {
            return Post.findOneAndUpdate(
                { _id: postId },
                {
                    $addToSet: { comments: { commentText, username }},
                },
                {
                    new: true,
                    runValidators: true,
                }
            );
        },
        addFriend: async (parent, { userId, friendId }) => {
            return User.findOneAndUpdate(
                { _id: userId },
                {
                    $addToSet: { friends: { friendId }}
                },
                {
                    new: true,
                    runValidators: true,
                }
            );
        },
        removeGoal: async (parent, { goalId }) => {
            return Goal.findOneAndDelete({ _id: goalId });
        },
        removeActivity: async (parent, { goalId, activityId }) => {
            return Goal.findOneAndUpdate(
                { _id: goalId },
                { $pull: { activities: { _id: activityId }}},
                { new: true }
            );
        },
        removePost: async (parent, { postId }) => {
            return Post.findOneAndDelete({ _id: postId });
        },
        removeComment: async (parent, { postId, commentId }) => {
            return Post.findOneAndUpdate(
                { _id: postId },
                { $pull: { comments: { _id: commentId }}},
                { new: true }
            );
        },
        removeFriend: async (parent, { userId, friendId }) => {
            return User.findOneAndUpdate(
                { _id: userId },
                { $pull: { friends: { _id: friendId }}},
            )
        }
    },
};

module.exports = resolvers;