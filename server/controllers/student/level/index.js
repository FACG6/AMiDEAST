const router = require('express').Router();

const { getStudents } = require('./getStudentsLevel');

router
  .route('/:level')
  .get(getStudents);

module.exports = router;
