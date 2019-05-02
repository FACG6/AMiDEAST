const connection = require('../config/db_connection');

const postApplyCourse = (courseid, studentid, datesid) => connection.query(`
INSERT INTO student_course (course_id, student_id, dates_id) values ($1, $2, $3) returning *`,
[courseid, studentid, datesid]);

const appliedCourse = (courseId, studentId) => connection.query(`
select course_id from student_course where course_id = $1 and student_id = $2`, [courseId, studentId]);

module.exports = { postApplyCourse };
