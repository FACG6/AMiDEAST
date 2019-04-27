const router = require('express').Router();
const { getAll } = require('./getAll');
const { getMy } = require('./getMy');
const { applyToCourse } = require('./postApply');

router
  .route('/allcourses')
  .get(getAll);

router.route('/mycourses')
  .get(getMy);

router.route('/applycourse')
  .post(applyToCourse);

module.exports = router;
