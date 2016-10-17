'use strict';
const express = require('express'),
      app = express(),
      database = require('./config/database.js'),
      connection = database.connection,
      DB_LIMIT = database.LIMIT,
      squel = require('squel'),
      port = process.env.PORT || 8000;

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({ error: { message: err.message }});
});

app.get('/api/weather', function (req, res) {
  let weatherQuery = squel.select().from('weather').limit(DB_LIMIT).toString();
  connection.query(weatherQuery, function (err, rows) {
    if (err) throw err;

    res.json(rows);
  });
});

app.listen(port, function () {
  console.log(`App running on port: ${port}`);
});

process.on('SIGTERM', function () {
  connection.end();
});
