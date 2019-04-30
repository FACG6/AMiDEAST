const connection = require('../config/db_connection');

const getStudentsInformation = () => connection.query('SELECT id, firstname, lastname, mobile_phone, level, is_active FROM student');

module.exports = { getStudentsInformation };
