const router = require('express').Router();

const getStudents = require('./getStudents');
const { getStudent } = require('./getStudent');
const studentLevel = require('./level');
const studentsCourse = require('./course');
const { updateStudent } = require('./updateStudent');
const { deleteStudent } = require('./deleteStudent');
const { addStudent } = require('./addStudent');

router
  .route('/')
  .get(getStudents)
  .post(addStudent);

router
  .route('/:id')
  .get(getStudent)
  .put(updateStudent)
  .delete(deleteStudent);

router
  .use('/level', studentLevel);

router
  .use('/course', studentsCourse);

module.exports = router;
