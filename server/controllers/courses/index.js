const router = require('express').Router();

const { getAllCourses } = require('./courses');
const { getCourse } = require('./course');
const coursesLevel = require('./level');
const studentCourses = require('./sudent');
const { applyCourse } = require('./postApplyCourse');
const { addCourse } = require('./addCourse');
const { deleteCourseById } = require('./deleteCourse');

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
  .use('/level', coursesLevel);

router
  .use('/student', studentCourses);

module.exports = router;
