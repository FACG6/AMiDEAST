const connection = require('../config/db_connection');

const putStudent = (userInfo, id) => {
  const queryValues = Object.keys(userInfo).map(info => userInfo[info]);
  const sql = {
    text: 'UPDATE student SET firstname = $1, lastname = $2, home_phone = $3, mobile_phone = $4, address = $5, level = $6, password = $7 WHERE id = $8 RETURNING *',
    values: [...queryValues, id],
  };
  return connection.query(sql);
};

module.exports = { putStudent };
