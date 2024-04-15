const { Schema, model } = require('mongoose');

const goalSchema = new Schema({
    goalTitle: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 180,
    },
    username: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        maxlength: 15
    },
    completed: {
        type: Boolean
    },
    frequency: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (date) => date.toLocaleString(),
    },
    activities: [
        {
            activityText: {
                type: String,
                required: true,
                minlength: 1,
                maxlength: 280,
            },
            createdAt: {
                type: Date,
                default: Date.now,
                get: (date) => date.toLocaleString(),
            },
        }
    ],
});

const Goal = model('goal', goalSchema);

module.exports = Goal;