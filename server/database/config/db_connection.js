const { Pool } = require('pg');
require('dotenv').config();
const url = require('url');

let DB_URL = '';
if (process.env.NODE_ENV === 'test') {
  DB_URL = process.env.DATABASE_TESTING;
} else if (process.env.NODE_ENV === 'dev') {
  DB_URL = process.env.DATABASE_LOCAL;
} else if (process.env.NODE_ENV === 'production') {
  DB_URL = process.env.DATABASE_HEROCO;
} else {
  throw new Error('not found DB_URL');
}
const params = url.parse(DB_URL);
const [user, password] = params.auth.split(':');
console.log(params);

const options = {
  host: params.hostname,
  port: params.port,
  database: params.path.split('/')[1],
  user,
  password,
  ssl: process.env.host !== 'localhost',
  max: process.env.DB_MAX_CONNECTIONS || 2,
};

module.exports = new Pool(options);
