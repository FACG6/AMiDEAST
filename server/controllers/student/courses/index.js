const router = require('express').Router();
const { getAll } = require('./getAll');
const { getMy } = require('./getMy');
// const { post } = require('./postApply');

router
  .route('/allcourses')
  .get(getAll);

router.route('/mycourses')
  .get(getMy);

// router.route('/applycourse')
//   .post(post);

module.exports = router;
