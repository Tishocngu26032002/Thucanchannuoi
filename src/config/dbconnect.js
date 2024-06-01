const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Tishocngu@26032002',
    database: 'thucanchannuoi',
});

module.exports = connection;