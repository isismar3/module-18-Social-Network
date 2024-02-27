const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
    {
        thoughtText: {
        type: String,
        required: 'Thought is required',
        minLength: 1,
        maxLength: 280,
        },
        createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => new Date(timestamp).toLocaleString(),
        },
        username: {
        type: String,
        required: 'Username is required',
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
        virtuals: true,
        getters: true,
        },
        id: false,
    }
    );

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
}
);

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;