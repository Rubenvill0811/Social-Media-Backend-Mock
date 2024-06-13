const router = require('express').Router();
const Thought = require('../../models/Thought');


// router.route('/thoughts:thoughtId')

// router.get('/', (req, res) => { res.send('Hello, this is a simple Express GET route!'); });
router.get('/', async (req, res) => {
    try {
        const thoughts = await Thought.find();
        res.json(thoughts);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
});

router.get('/:thoughtId', async (req, res) => {
    try {
        const thought = Thought.findOne({
            _id: req.params.thoughtId
        });
        if (!thought) {
            return res.status(404).json({message: 'No thought with that ID'})
        }

        res.json(thought);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const newThought = await Thought.create(req.body);
        res.json(newThought);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

});

module.exports = router;