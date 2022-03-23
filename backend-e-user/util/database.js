const mysql = require('mysql2');

const con = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'nodeData',
    password: 'rhizi1234'
})

module.exports = con;