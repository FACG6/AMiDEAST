const connection = require('../config/db_connection');

const deleteCourse = (id) => {
  const sql = {
    text: 'DELETE FROM course WHERE id = $1 RETURNING *',
    values: [id],
  };
  return connection.query(sql);
};

module.exports = { deleteCourse };
