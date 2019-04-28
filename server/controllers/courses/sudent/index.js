const router = require('express').Router();

const { getStudents } = require('./getStudentsCourse');

router
  .route('/:id')
  .get(getStudents);

module.exports = router;
