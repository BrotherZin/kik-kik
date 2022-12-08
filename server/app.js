var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// var app = express();

var session = require("express-session")
var MysqlStore = require("express-mysql-session")(session)
var options = {
  host: '15.165.63.155',
  port: 3306,
  user: 'kikkik',
  password: '123qwe123!',
};
var sessionStore = new MysqlStore(options)


const { Sequelize } = require('sequelize');
global.sequelize = new Sequelize('kikkik', 'kikkik', '123qwe123!', {
  host: '15.165.63.155',
  dialect: "mysql"
});
// var { Sequelize, Model, DataTypes } = require('sequelize');
// global.sequelize = new Sequelize('kikkik', 'kikkik', '123qwe123!', {
//   host: '15.165.63.155',
//   dialect: "mysql"
// });
require("./model.js")

var usersRouter = require('./routes/users');

var app = express();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// var boardRouter = require('./routes/board');

var app = express();

app.use(session({
  key: 'session_key',
  secret: 'session_secret',
  store: sessionStore,
  resave: false,
  saveUninitialized: false
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../front/dist')));

app.use('/', indexRouter);
app.use('/api/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;