var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', index);

// catch 404 and forward to error handler
app.use(function (req, res) {
  res.status(404);
  res.json({ error: 'not-found' });
});
// error handler
app.use(function (err, req, res, next) {
  console.error('error', req.method, req.path, err);

  // return the error page
  if (!res.headersSent) {
    res.status(500);
    res.json({ error: 'unexpected' });
  }
});


module.exports = app;
