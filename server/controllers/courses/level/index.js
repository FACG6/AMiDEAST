const router = require('express').Router();

const { getCoursesLevel } = require('./getCoursesLevel');

router
  .route('/:level')
  .post(getCoursesLevel);

module.exports = router;
