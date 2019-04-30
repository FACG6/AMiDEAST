const connection = require('../config/db_connection');

const getCourseInformation = courseId => connection.query('SELECT * FROM course WHERE id = $1', [courseId]);

module.exports = getCourseInformation;
