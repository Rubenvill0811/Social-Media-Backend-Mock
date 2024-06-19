const router = require('express').Router();
const User = require('../../models/User');

router.post('/', async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.json(newUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.delete('/:userId', async (req, res) => {
    try {
        const id = req.params.userId;
        let deletedUser = await User.deleteOne(id)
        res.json(deletedUser);
    } catch (err) {
        res.status(500).json(err)
    }

    if (!deletedUser) {
        res.json(`There is no user with the id of ${id}`);
    } else{
        console.log(`user ${id} has been deleted.`)
        res.json({message: 'User has been deleted successfully.'})
    }
});

module.exports = router;