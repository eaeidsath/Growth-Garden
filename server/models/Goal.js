const { Schema, model } = require('mongoose');

const goalSchema = new Schema(
    {
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
            type: Boolean,
            default: false
        },
        frequency: {
            type: String,
            required: true
        },
        flowerType: {
            type: String,
            required: true,
            default: "Daisy"
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (date) => date.toLocaleString(),
        },
        endDate: {
            type: Date,
            required: true,
            default: (Date.now + 28800*60000),
            get: (date) => date.toLocaleString()
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
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

goalSchema.virtual('activityLevel').get(function () {
    return this.activities.length;
})

const Goal = model('goal', goalSchema);

module.exports = Goal;