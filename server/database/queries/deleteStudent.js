const connection = require('../config/db_connection');

const updateStudentStatus = (id) => {
  const sql = {
    text: 'UPDATE student SET is_active = false WHERE id = $1 RETURNING *',
    values: [id],
  };
  return connection.query(sql);
};

const deleteStudent = (id) => {
  const sql = {
    text: 'DELETE FROM student_course WHERE student_id = $1 RETURNING *',
    values: [id],
  };
  return connection.query(sql);
};

module.exports = {
  updateStudentStatus,
  deleteStudent,
};
