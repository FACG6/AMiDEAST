const connection = require('../config/db_connection');

const getStudentsByLevel = level => connection.query(
  'SELECT id, firstname, lastname, mobile_phone, level, is_active FROM student WHERE level = $1',
  [level],
);

module.exports = getStudentsByLevel;
