const router = require('express').Router();

const { getAllCourses } = require('./courses');
const { getCourse } = require('./course');
const coursesLevel = require('./level');
const studentCourses = require('./sudent');
const { applyCourse } = require('./postApplyCourse');
const { addCourse } = require('./addCourse');
const { deleteCourseById } = require('./deleteCourse');
const { getCourseDetails } = require('./getCourseDetails');

router
  .route('/')
  .get(getAllCourses)
  .post(addCourse);

router
  .route('/:id')
  .get(getCourse)
  .post(applyCourse)
  .delete(deleteCourseById);

router
  .route('/details/:id')
  .get(getCourseDetails);

router
  .use('/level', coursesLevel);

router
  .use('/student', studentCourses);

module.exports = router;
