const router = require('express').Router();

const { getCoursesLevel } = require('./getCoursesLevel');

router
  .route('/:id')
  .get(getCoursesLevel);

module.exports = router;
