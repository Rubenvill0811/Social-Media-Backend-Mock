const router = require('express').Router();
const User = require('../../models/User');
const Thought = require('../../models/Thought');

// Gets users

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        if (!users) {
            return res.status(500).json({message: 'No users have been created'})
        }
        res.json(users);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get's one user by id

router.get('/:userId', async (req, res) => {
    try {
        const user = await User.findOne({
            _id: req.params.userId
        });
        if (!user) {
            return res.status(500).json({message: 'No users by that ID'})
        }
        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Creates a friend

router.post('/:userId/friends', async (req, res) => {
    try {
        const newFriend = await User.findOneAndUpdate(
            {_id: req.params.userId},
            {$addToSet: {friends: req.body}},
            {new: true}
        );
        res.json(newFriend);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Get's a list of a user's friends

router.get('/:userId/friends', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId).populate('friends');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user.friends);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Deletes a friend from your friends list.

router.delete('/:userId/friends', async (req, res) => {
    const deletedFriend = req.params.userId;
    res.send(`Friend with userId ${deletedFriend} has been removed from your friends.`)
});

// Deletes a user and all of their posts.

router.delete('/:userId', async (req , res) => {
    try {

        const deletedUser = req.params.userId;
        await User.findByIdAndDelete(deletedUser);
        await Thought.deleteMany({userId: deletedUser});
        
        res.status(200).json({
            message: `The user with the ID of ${deletedUser} and all of their content has been removed.`
        })
    
    } catch (err) {

        res.status(500).json(err)
    }
});

module.exports = router;