const connection = require('../config/db_connection');

const getStudentsInformation = () => connection.query('SELECT * FROM student');

module.exports = { getStudentsInformation };
