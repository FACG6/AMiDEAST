const connection = require('../config/db_connection');

const getCoursesInformation = () => connection.query('SELECT * FROM course');

module.exports = getCoursesInformation;
