const mongoose = require('mongoose');
const {Schema, Types} = require('mongoose');

const commentSchema = new Schema(
    {
        commentId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        commentBody: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        post: {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        },
        username: {
            type: String,
            required: true
        },
        createdAt:{
            type: Date,
            default: Date.now
        },
    },
);

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;