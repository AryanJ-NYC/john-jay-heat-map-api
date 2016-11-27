'use strict';
const express = require('express'),
      app = express(),
      cors = require('cors'),
      mySqlDB = require('./config/databases/mySqlConnection.js'),
      mySqlConnectionPool = mySqlDB.connectionPool,
      port = process.env.PORT || 8000;

app.use(cors());

// error handler
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
  mySqlConnectionPool.end(function () {
    console.log('Connection to mySqlDB terminated.');
  });
});
