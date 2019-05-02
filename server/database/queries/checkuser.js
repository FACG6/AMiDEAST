const dbconnection = require("../config/db_connection");

const checkStudent = id => {
  const sql = {
    text: "select * from student where id = $1",
    values: [id]
  };
  return dbconnection.query(sql);
};

const checkStaff = id => {
  const sql = {
    text: "select * from staff where id= $1",
    values: [id]
  };
  return dbconnection.query(sql);
};

module.exports = { checkStudent, checkStaff };
