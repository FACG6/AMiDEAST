const connection = require('../config/db_connection');

const getStudentCourses = studentId => connection.query(`
SELECT course.title, course.description, course.publish_date, dates.days, dates.h_from, dates.h_to
FROM course 
INNER JOIN student_course ON course.id = student_course.course_id 
INNER JOIN student ON student.id = student_course.student_id 
INNER JOIN dates ON dates.id = student_course.dates_id
WHERE student.id = $1`, [studentId]);

module.exports = getStudentCourses;
