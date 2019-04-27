const router = require('express').Router();
const { getAllCourses } = require('./getAll');
const { getMyCourses } = require('./getMy');
const { applyToCourse } = require('./postApply');

router.route('/allcourses')
  .get(getAllCourses);

router.route('/mycourses')
  .get(getMyCourses);

router.route('/applycourse')
  .post(applyToCourse);

module.exports = router;
