const { sign } = require('jsonwebtoken');
require('dotenv').config();

const createCookie = payload => sign(payload, process.env.SECRET);

module.exports = { createCookie };
