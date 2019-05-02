const { verify } = require('jsonwebtoken');
require('dotenv').config();

module.exports = cookie => new Promise((resolve, reject) => {
  verify(cookie, process.env.SECRET, (err, payload) => {
    if (err) reject(err);
    resolve(payload);
  });
});
