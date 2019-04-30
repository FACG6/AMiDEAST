const router = require('express').Router();

const { get } = require('./getCoursesStudent');

router
  .route('/:studentId')
  .get(get);

module.exports = router;
