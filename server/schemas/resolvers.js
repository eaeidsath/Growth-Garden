const { User, Goal, Post } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('goals');
        },
        user: async (parent, { userId }) => {
            return User.findOne({ _id: userId }).populate('goals');
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

    
}