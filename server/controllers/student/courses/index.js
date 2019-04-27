const router = require('express').Router();
const { getAllCourses } = require('./getAll');

router.route('/allcourses')
  .get(getAllCourses);

module.exports = router;
