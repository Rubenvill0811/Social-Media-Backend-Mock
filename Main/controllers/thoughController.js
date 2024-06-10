const { ObjectId } = require('mongoose').Types;
const Thought = require('../models/Thought');
const Comment = require('../models/Comment');

module.exports = {

// get all Thoughts
async getThoughts(req, res) {
    try {
        const thoughts = await Thought.find().populate('comments');
        res.json(thoughts);
    } catch (err) {
        res.status(500).json(err);
    }
},
// get one thought
async getThought(req, res) {
    try {
        const thought = await Thought.findOne({
            _id: req.params.thoughtId
        }).populate('comments');
        res.json(thought);
    } catch (err) {
        res.status(500).json(err)
    }
},
























}