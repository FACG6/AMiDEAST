const router = require('express').Router();

const student = require('./student');
const courses = require('./courses');
// const staff = require('./staff');

router
  .use('/student', student);

router
  .use('/course', courses);

// router
//   .use('/staff', staff);

module.exports = router;
