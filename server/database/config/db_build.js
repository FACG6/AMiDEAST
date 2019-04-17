const { readFileSync } = require('fs');
const path = require('path');
const connection = require('./db_connection');

const dbRun= () => {
  const filepath = path.join(__dirname, 'db_build.sql');
  const sql = readFileSync(filepath).toString();
  return connection.query(sql);
};
module.exports = dbRun;
