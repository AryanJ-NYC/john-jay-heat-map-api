'use strict';
const router = require('express').Router(),
      floorDataRoutes = require('./floor-data/floor-data.routes'),
      weatherRoutes = require('./weather/weather.routes');

router.use('/weather', weatherRoutes);
router.use('/floor-data', floorDataRoutes);

module.exports = router;
