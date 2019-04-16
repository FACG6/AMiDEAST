const express = require('express');

const app = express();
app.disable('x-powered-by');
app.use(express.json());
app.set('port', process.env.PORT || 7777);

module.exports = app;
