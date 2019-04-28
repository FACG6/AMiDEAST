const router = require('express').Router();

const { courses } = require('./courses');
const { course } = require('./course');
const { coursesLevel } = require('./level');
const { studentCourses } = require('./sudent');
const { applyCourse } = require('./postApplyCourse');
const { addCourse } = require('./addCourse');
const { deleteCourse } = require('./deleteCourse');

router
  .route('/')
  .get(courses)
  .post(addCourse);

router
  .route('/:id')
  .get(course)
  .put(applyCourse)
  .delete(deleteCourse);

router
  .use('/level', coursesLevel);

router
  .use('/student', studentCourses);

module.exports = router;
