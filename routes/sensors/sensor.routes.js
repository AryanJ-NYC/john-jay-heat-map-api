'use strict';
const router = require('express').Router(),
      sensorHandlers = require('./sensor.handlers');

router.get('/:sensorNo', sensorHandlers.getSensorData);

module.exports = router;