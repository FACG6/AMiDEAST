const express = require('express');
const cookieParser = require('cookie-parser');
const {
  join
} = require('path');
const cors = require('cors');
const router = require('./controllers');

require('dotenv').config();

const app = express();

app.disable('x-powered-by');
app.use(express.json());
app.use(cookieParser());
app.set('port', process.env.PORT || 7777);
app.use(express.urlencoded({
  extended: false,
}));

app.use(express.static(join(__dirname, '..', 'Client', 'build')));
app.use('/api/v1', router);

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, '..', 'Client', 'build', 'index.html'));
});

module.exports = app;
