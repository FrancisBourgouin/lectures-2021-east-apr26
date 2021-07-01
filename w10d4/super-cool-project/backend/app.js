const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.post("/api/login", (req, res) => {
  res.cookie("userId", 1)
  res.json({ name: "Lil Chicken" })
})

app.post("/api/authenticate", (req, res) => {
  console.log(req.cookies)
  if (Number(req.cookies.userId) === 1) {
    res.json({ name: "Lil Chicken" })
  } else {
    res.json(null)
  }
})
module.exports = app;
