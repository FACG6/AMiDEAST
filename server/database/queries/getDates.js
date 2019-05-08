const connection = require('../config/db_connection');

const getDates = courseId => connection.query('select * from dates where course_id = $1', [courseId]);

module.exports = { getDates };
