const connection = require('../config/db_connection');

const getStudentsInformation = () => connection.query('SELECT * FROM student WHERE is_active = true');

module.exports = { getStudentsInformation };
