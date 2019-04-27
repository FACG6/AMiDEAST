const router = require('express').Router();
const { getAllCourses } = require('./getAll');
const { getMyCourses } = require('./getMy');
const { postCourse } = require('./postApply');

router
  .route('/allcourses')
  .get(getAllCourses);

router
  .route('/mycourses')
  .get(getMyCourses);

router
  .route('/applycourse')
  .post(postCourse);

module.exports = router;
