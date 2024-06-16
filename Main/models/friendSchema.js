const {Schema, Types} = require('mongoose');


const friendSchema = new Schema(
    {
        userID: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        username: {
            type: String,
            required: true
        },
        createdAt:{
            type: Date,
            default: Date.now
        }
    },
    {
        toJSON: {getters: true},
        id: false,
    }
);

module.exports = friendSchema;