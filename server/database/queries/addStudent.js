const connection = require('../config/db_connection');

const insertStudent = (userInfo) => {
  const queryValues = Object.keys(userInfo).map(info => userInfo[info]);
  const sql = {
    text: 'INSERT INTO student(password, mobile_phone, lastname, home_phone, level, address , firstname) values ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
    values: [...queryValues],
  };
  return connection.query(sql);
};

module.exports = { insertStudent };
