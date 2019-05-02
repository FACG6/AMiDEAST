const connection = require('../config/db_connection');

const getCoursesByLevel = level => connection.query(`
SELECT * FROM course WHERE target_level = $1`, [level]);

module.exports = getCoursesByLevel;
