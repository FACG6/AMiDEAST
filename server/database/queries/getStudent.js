const connection = require('../config/db_connection');

const getStudentInformation = studentId => connection.query(
  'SELECT * FROM student WHERE id = $1',
  [studentId],
);

module.exports = getStudentInformation;
