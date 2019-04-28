const connection = require('../config/db_connection');

const getStudentsByCourse = courseId => connection.query(
  'SELECT id, firstname, lastname, mobile_phone, level, addres, home_phone FROM student INNER JOIN student_course ON student_course.student_id = student.id WHERE student_course.course_id = 1 $1',
  [courseId],
);

module.exports = getStudentsByCourse;
