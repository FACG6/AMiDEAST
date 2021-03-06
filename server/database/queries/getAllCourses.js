const connection = require('../config/db_connection');

const getAvailableCourses = level => connection.query(`
SELECT title, description FROM course WHERE target_level > $1`, [level]);

module.exports = getAvailableCourses;
