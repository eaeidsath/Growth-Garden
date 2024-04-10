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
    createdAt: {
        type: Date,
        default: Date.now,
        get: (date) => date.toLocaleString(),
    },
    activities: [
        {
            type: Schema.Types.ObjectId,
            ref: 'activity',
        }
    ],
});

const Goal = model('goal', goalSchema);

model.exports = Goal;