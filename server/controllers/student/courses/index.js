const router = require('express').Router();
const { getAllCourses } = require('./getAll');
const { getMyCourses } = require('./getMy');

router.route('/allcourses')
  .get(getAllCourses);

router.route('/mycourses')
  .get(getMyCourses);

module.exports = router;
