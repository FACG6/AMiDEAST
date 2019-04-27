
const router = require('express').Router();
const { postAddCourse } = require('./course');

router.route('/course/addcourse')
  .post(postAddCourse);

module.exports = router;
