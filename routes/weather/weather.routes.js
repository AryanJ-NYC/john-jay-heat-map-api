'use strict';
const router = require('express').Router(),
      squel = require('squel'),
      database = require('../../config/database.js'),
      connection = database.connection,
      DB_LIMIT = database.LIMIT;

router.get('/', function (req, res) {
  let weatherQuery = squel.select().from('weather').limit(DB_LIMIT).toString();
  connection.query(weatherQuery, function (err, rows) {
    if (err) throw err;

    res.json(rows);
  });
});

module.exports = router;
