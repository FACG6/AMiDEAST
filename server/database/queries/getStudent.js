const connection = require('../config/db_connection');

const getStudentInformation = studentId => connection.query(`
SELECT amideastId, firstname, lastname, mobilephone, level, isActive FROM student WHERE amideastId = $1;`, [studentId]);

module.exports = getStudentInformation;
