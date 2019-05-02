const connection = require('../config/db_connection');

const getCoursesByLevel = level => connection.query(`
SELECT * FROM course inner join dates on dates.course_id = course.id WHERE target_level = $1`, [level]);

module.exports = getCoursesByLevel;
