const { sign } = require('jsonwebtoken');
require('dotenv').config();

const createCookie = (userId, userName) => new Promise((resolve, reject) => {
  const payload = {
    userId,
    userName,
  };
  sign(payload, process.env.SECRET, (err, token) => {
    if (err) reject(err);
    resolve(token);
  });
});

module.exports = { createCookie };
