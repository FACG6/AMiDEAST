const router = require('express').Router();

const { getStudents } = require('./getStudentsCourse');

router
  .route('/:courseId')
  .get(getStudents);

module.exports = router;
