const { User, Goal, Post } = require('../models');
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
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id }).populate('posts').populate('friends').populate('goals').populate({
                    path: 'goals',
                    populate: 'activities'
                });
            }
            throw AuthenticationError;
        },
    },

    Mutation: {
        addUser: async (parent, args ) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw AuthenticationError;
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw AuthenticationError
            }

            const token = signToken(user);

            return { token, user };
        },
        addGoal: async (parent, { goalTitle, category, frequency, flowerType, endDate }, context) => {
            if (context.user) {
                const goal = await Goal.create({
                    goalTitle,
                    category,
                    frequency,
                    flowerType,
                    endDate,
                    username: context.user.username,
                });

                await User.findOneAndUpdate(
                    { username: context.user.username },
                    { $addToSet: { goals: goal._id } }
                );

                return goal;
            }

            throw AuthenticationError;
        },
        addActivity: async (parent, { goalId, activityText }, context) => {
            if (context.user) {
                return Goal.findOneAndUpdate(
                    { _id: goalId },
                    {
                        $addToSet: { activities: { activityText, username: context.user.username } },
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            }
            throw AuthenticationError
        },
        addPost: async (parent, { postText }, context) => {
            if (context.user) {
                const post = await Post.create({
                    postText,
                    username: context.user.username
                });

                await User.findOneAndUpdate(
                    { username: context.user.username },
                    { $addToSet: { posts: post._id } }
                );

                return post;
            }
            throw AuthenticationError
        },
        addComment: async (parent, { postId, commentText }, context) => {
            if (context.user) {
                return Post.findOneAndUpdate(
                    { _id: postId },
                    {
                        $addToSet: { comments: { commentText, username: context.user.username } },
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            }
            throw AuthenticationError;
        },
        addFriend: async (parent, { friendId }, context) => {
            if (context.user) {
                return User.findOneAndUpdate(
                    { _id: context.user._id },
                    {
                        $addToSet: { friends: { _id: friendId } }
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            }
            throw AuthenticationError;
        },
        removeGoal: async (parent, { goalId }, context) => {
            if (context.user) {
                const goal = await Goal.findOneAndDelete({
                    _id: goalId,
                    username: context.user.username,
                });

                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { goals: goal._id } }
                );

                return goal;
            }
            throw AuthenticationError;
        },
        removeActivity: async (parent, { goalId, activityId }, context) => {
            if (user.context) {
                return Goal.findOneAndUpdate(
                    { _id: goalId },
                    { $pull: { activities: { _id: activityId, username: context.user.username } } },
                    { new: true }
                );
            }
            throw AuthenticationError;
        },
        removePost: async (parent, { postId }, context) => {
            if (context.user) {
                const post = await Post.findOneAndDelete({
                    _id: postId,
                    username: context.user.username
                });

                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { posts: post._id } }
                );

                return post;
            }
            throw AuthenticationError;
        },
        removeComment: async (parent, { postId, commentId }, context) => {
            if (context.user) {
                return Post.findOneAndUpdate(
                    { _id: postId },
                    { $pull: { comments: { _id: commentId, username: context.user.username } } },
                    { new: true }
                );
            }
            throw AuthenticationError;
        },
        removeFriend: async (parent, { friendId }, context) => {
            if (context.user) {
                return User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { friends: { _id: friendId } } },
                )
            }
            throw AuthenticationError;
        }
    },
};

module.exports = resolvers;