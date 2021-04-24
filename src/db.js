const mysql = require('mysql2');

const mysqlConnection = mysql.createConnection({
    host: '3.139.66.15',
    user: 'coviduser',
    password: 'covidpassword',
    database: 'coviddb',
    multipleStatements: true
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('db is connected');
  }
});

module.exports = mysqlConnection;