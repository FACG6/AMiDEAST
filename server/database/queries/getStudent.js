const connection = require('../config/db_connection');

const getStudentInformation = studentId => connection.query(
  'SELECT id, firstname, lastname, mobile_phone, level, is_active FROM student WHERE id = $1',
  [studentId],
);

module.exports = getStudentInformation;
