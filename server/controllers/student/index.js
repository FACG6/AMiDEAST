const router = require('express').Router();

const { students } = require('./getStudents');
const { student } = require('./getStudent');
const { studentsLvele } = require('./level');
const { studentsCourse } = require('./course');
const { updateStudent } = require('./updateStudent');
const { deleteStudent } = require('./deleteStudent');
const { addStudent } = require('./addStudent');

router
  .route('/')
  .get(students)
  .post(addStudent);

router
  .route('/:id', student)
  .put(updateStudent)
  .delete(deleteStudent);

router
  .use('/level', studentsLvele);

router
  .use('/course', studentsCourse);

module.exports = router;
