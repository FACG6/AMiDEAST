const connection = require('../config/db_connection');

const insertStudent = (userInfo) => {
  const queryValues = Object.values(userInfo);
  const sql = {
    text: 'INSERT INTO student(firstname, lastname, home_phone, mobile_phone, address, level, password) values ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
    values: [...queryValues],
  };
  return connection.query(sql);
};

module.exports = { insertStudent };
