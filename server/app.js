const express = require('express');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();
app.disable('x-powered-by');
app.use(express.json());
app.use(cookieParser());
app.set('port', process.env.PORT || 7777);
module.exports = app;
