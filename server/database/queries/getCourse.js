const connection = require('../config/db_connection');

const getCourseInformation = courseId => connection.query('SELECT * FROM course WHERE course_id = $1', [courseId]);

module.exports = getCourseInformation;
