const connection = require('../config/db_connection');

const getCoursesByLevel = (level, studentId) => connection.query(`
select * from course join dates ON dates.course_id = course.id where target_level = $1 and dates.course_id not in (select course_id  from student_course  where student_id = $2)`, [level, studentId]);

module.exports = getCoursesByLevel;
