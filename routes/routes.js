'use strict';
const router = require('express').Router(),
      weatherRoutes = require('./weather/weather.routes');

router.use('/weather', weatherRoutes);

module.exports = router;
