const connection = require('../config/db_connection');

const getNumberOfStudent = courseId => connection.query('select count(*) from student_course where course_id = $1', [courseId]);
const getNumberStudentForEachDate = (courseId, dateId) => connection.query('select count(*) as count from student_course where course_id = $1 and dates_id = $2', [courseId, dateId]);

module.exports = { getNumberOfStudent, getNumberStudentForEachDate };
