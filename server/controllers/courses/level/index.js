const router = require('express').Router();

const { getCoursesLevel } = require('./getCoursesLevel');

router
  .route('/:level')
  .get(getCoursesLevel);

module.exports = router;
