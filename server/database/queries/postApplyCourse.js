const connection = require('../config/db_connection');

const postApplyCourse = (courseid, studentid, datesid) => connection.query(`
INSERT INTO student_course (course_id, student_id, dates_id) values($1, $2, $3) returning *`,
[courseid, studentid, datesid]);

module.exports = postApplyCourse;
