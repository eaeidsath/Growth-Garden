const { Schema, model } = require('mongoose');

const activitySchema = new Schema({
    activityText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (date) => date.toLocaleString(),
    },
});

const Activity = model('activity', activitySchema);

model.exports = Activity;