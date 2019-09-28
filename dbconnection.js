let mysql = require('mysql');

let connection = mysql.createPool({
    host: '192.168.1.30',
    user: 'admin',
    password: 'BC92a278',
    database: 'leny'
});

module.exports = connection;