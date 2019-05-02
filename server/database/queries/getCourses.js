const connection = require('../config/db_connection');

const getCoursesInformation = () => connection.query('SELECT * FROM course ORDER BY publish_date asc  ');

module.exports = getCoursesInformation;
