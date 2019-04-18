const { Pool } = require('pg');
require('dotenv').config();
const url = require('url');

let DB_URL = '';
switch (process.env.NODE_ENV) {
  case 'test':
    DB_URL = process.env.DATABASE_TESTING;
    break;
  case 'production':
    DB_URL = process.env.DATABASE_HEROCU;
    break;
  case 'dev':
    DB_URL = process.env.DATABASE_LOCAL;
    break;
  default:
    throw new Error('not found the DB_URL');
}

const params = url.parse(DB_URL);
const [user, password] = params.auth.split(':');
const options = {
  user,
  password,
  host: params.hostname,
  port: params.port,
  database: params.path.split('/')[1],
  ssl: process.env.host !== 'localhost',
};

module.exports = new Pool(options);
