const router = require('express').Router();
const student = require('./student');
// const staff = require('./staff');

router.use('/student', student);
// router.use('/staff', staff);

module.exports = router;
