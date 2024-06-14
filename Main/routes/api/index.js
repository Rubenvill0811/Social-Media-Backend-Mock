const router = require('express').Router();
const thoughtRoute = require('./thoughtRoute');
const userRoutes = require('./userRoutes');
const createUser = require('./createUser')



router.use('/thoughts', thoughtRoute);
router.use('/users', userRoutes);
router.use('/createUserProfile', createUser)

module.exports = router;