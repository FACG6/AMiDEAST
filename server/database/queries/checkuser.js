const connection = require('../config/db_connection');

const checkStudent = (id, password) => connection.query('SELECT id, password FROM student WHERE id = $1 and password = $2', [id, password]);

const checkStaff = (id, password) => connection.query('SELECT id, password FROM staff WHERE id = $1 and password = $2', [id, password]);

module.exports = { checkStudent, checkStaff };
