const express = require('express');
const bodyParser = require('body-parser');
const rout = require('./controller/user.controller');

const app = express();

app.use('/', bodyParser.json());

app.use('/contact', rout);

app.use((error, req, res, next) => {
  res.send(error.message);
});
module.exports = app;
