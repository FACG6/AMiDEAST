const router = require('express').Router();

const user = require('./user');
const course = require('./courses');

router.use('/user', user);
router.use('/course', course);

module.exports = router;
