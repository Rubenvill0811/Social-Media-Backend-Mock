const router = require('express').Router();
const {
    getThoughts,
    getThought
} = require('../../controllers/thoughController')

router.route('/').get(getThoughts, getThought)

module.exports = router;