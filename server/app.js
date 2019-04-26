const express = require('express');
const { join } = require('path');
const router = require('./controllers');

const app = express();
app.disable('x-powered-by');
app.use(express.json());
app.set('port', process.env.PORT || 7777);

app.use(express.static(join(__dirname, '..', 'Client', 'build')));
app.use('/api/v1', router);

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, '..', 'CLient', 'build', 'index.html'));
});

module.exports = app;
