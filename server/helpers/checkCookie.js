const { verify } = require('jsonwebtoken');
require('dotenv').config();

const checkCookie = cookie => new Promise((resolve, reject) => {
  verify(cookie, process.env.SECRET, (err, payload) => {
    if (err) reject(err);
    resolve(payload);
  });
});

module.exports = { checkCookie };
