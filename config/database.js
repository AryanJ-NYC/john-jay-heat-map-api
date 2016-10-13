const config = require('./config.js'),
      mysql = require('mysql'),
      connection = mysql.createConnection({
        host: '149.4.68.217',
        user: config.DB_READ_USER,
        database: 'bpl_performance_lab',
        password: config.DB_PW
      });

connection.connect(function (err) {
  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
  }

  console.log(`Connected as id ${connection.threadId}`);
});

module.exports = connection;
