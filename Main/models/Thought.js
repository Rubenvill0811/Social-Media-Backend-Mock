const mongoose = require('mongoose');
const { Schema, Types } = mongoose;

const thoughtSchema = new Schema(
    {
        thoughtId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            minlength: 1,
            maxlength: 280,
            required: true
        },
        author: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        comments: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Comment',
            }
        ],
    },
);

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;