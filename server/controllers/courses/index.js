const router = require('express').Router();

const { getAllCourses } = require('./courses');
const { getCourse } = require('./course');
const coursesLevel = require('./level');
const studentCourses = require('./sudent');
const { applyCourse } = require('./postApplyCourse');
const { addCourse } = require('./addCourse');
const { deleteCourseById } = require('./deleteCourse');
const { studentpermission, staffpermission } = require('../../middlewares/authorization');
const { getCourseDetails } = require('./getCourseDetails');

router
  .route('/')
  .get(staffpermission, getAllCourses)
  .post(staffpermission, addCourse);

router
  .route('/:id')
  .get(getCourse)
  .post(studentpermission, applyCourse)
  .delete(staffpermission, deleteCourseById);

router
  .route('/details/:id')
  .get(getCourseDetails);

router
  .use('/level', coursesLevel);

router
  .use('/student', studentCourses);

module.exports = router;
