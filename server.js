'use strict';
const express = require('express'),
      app = express(),
      database = require('./config/database.js'),
      connection = database.connection,
      DB_LIMIT = database.LIMIT,
      port = process.env.PORT || 8000;

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({ error: { message: err.message }});
});

const routes = require('./routes/routes');

app.use('/api', routes);

app.listen(port, function () {
  console.log(`App running on port: ${port}`);
});

process.on('SIGTERM', function () {
  connection.end(function () {
    console.log('Connection to database terminated.');
  });
});
