const router = require('express').Router();
const User = require('../../models/User');

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


module.exports = router;