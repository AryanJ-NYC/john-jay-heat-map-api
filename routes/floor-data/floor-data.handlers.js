'use strict';
const squel = require('squel'),
      database = require('../../config/database.js'),
      connection = database.connection;

module.exports.getVavsByFloor = function (req, res, next, floorNumber) {
  let sensorQuery = squel.select()
      .from('sensors')
      .where(`sensorfloor = ${floorNumber} AND sensortype = 'VAV'`)
      .field('sensor_deviceid')
      .field('sensorid')
      .field('sensorname')
      .toString();

  connection.query(sensorQuery, function (err, rows) {
    if (err) throw err;

    let vavs = rows.map(function (vav) {
      let sensorName;
      if (vav.sensorname.indexOf('DMPR POS') > 0) {
        sensorName = 'Damper Position';
      } else if (vav.sensorname.indexOf('DIAL') > 0) {
        sensorName = 'Room Setpoint';
      } else if (vav.sensorname.indexOf('ROOM TEMP') > 0) {
        sensorName = 'Room Temperature';
      }
      return {
        sensorId: vav.sensorid,
        sensorDeviceId: vav.sensor_deviceid,
        sensorName: sensorName
      };
    }).filter(function (sensor) {
      return sensor.sensorId > 10
    });

    req.vavs = Array.from(new Set(vavs));
    return next();
  })
};
