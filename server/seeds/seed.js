const db = require('../config/connection');
const { User, Goal, Post } = require('../models');
const userSeeds = require('./userSeeds.json');
const goalSeeds = require('./goalSeeds.json');
const postSeeds = require('./postSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
    try {
        await cleanDB('User', 'users');
        await cleanDB('Goal', 'goals');
        await cleanDB('Post', 'posts');

        await User.create(userSeeds);

        for (let i = 0; i < goalSeeds.length; i++) {
            const { _id, username } = await Goal.create(goalSeeds[i]);
            const user = await User.findOneAndUpdate(
                { username: username },
                { $addToSet: { goals: _id } }
            );
        }

        for (let i = 0; i < postSeeds.length; i++) {
            const { _id, username } = await Post.create(postSeeds[i]);
            const user = await User.findOneAndUpdate(
                { username: username },
                { $addToSet: { posts: _id }}
            );
        }

    } catch (err) {
        console.error(err);
        process.exit(1);
    }

    console.log('Finished seeding.');
    process.exit(0);
});