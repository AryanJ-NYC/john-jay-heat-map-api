const config = require('./config'),
      mysql = require('mysql'),

      connection = mysql.createConnection({
        host: '149.4.68.217',
        user: config.DB_READ_USER,
        database: 'bpl_performance_lab',
        password: config.DB_PW
      });

exports.connection = connection;
exports.LIMIT = 500;
