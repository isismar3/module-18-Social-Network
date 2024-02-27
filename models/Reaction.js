const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
        type: Types.ObjectId,
        default: () => new Types.ObjectId(),
        },
        reactionBody: {
        type: String,
        required: 'Reaction is required',
        maxLength: 280,
        },
        username: {
        type: String,
        required: 'Username is required',
        },
        createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamps) => new Date(timestamps).toLocaleString(),
        },
    },
    {
        toJSON: {
        getters: true,
        },
        id: false,
    }
    );

module.exports = reactionSchema;