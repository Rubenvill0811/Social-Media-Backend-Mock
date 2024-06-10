const router = require('express').Router();

const thoughtRoute = require('./thoughtRoute');

router.use('thoughts', thoughtRoute)

module.exports = router;