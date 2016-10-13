const express = require('express'),
      app = express(),
      database = require('./config/database.js'),
      port = process.env.PORT || 8000;

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({ error: { message: err.message }});
});

app.listen(port, function () {
  console.log(`App running on port: ${port}`);
});
