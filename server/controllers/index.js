const router = require('express').Router();
const staff = require('./staff');
const student = require('./student');

router.use('/staff', staff);
router.use('/student', student);

module.exports = router;
