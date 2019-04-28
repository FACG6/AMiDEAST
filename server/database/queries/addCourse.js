const connection = require('../config/db_connection');

const insertCourse = (userInfo) => {
  const queryValues = Object.keys(userInfo).map(info => userInfo[info]);
  const sql = {
    text: 'INSERT INTO course(title, description, target_level, number_of_student, publish_date) values ($1, $2, $3, $4, $5)  RETURNING *',
    values: [...queryValues, new Date(Date.now()).toUTCString()],
  };
  return connection.query(sql);
};

module.exports = { insertCourse };
