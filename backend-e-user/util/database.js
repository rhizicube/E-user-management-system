const mysql = require('mysql2');

const con = mysql.createPool({
    host: 'dockersql',
    user: 'Shubhi',
    port: '3306',
    database: 'nodeData',
    password: 'rhizi1234'
})

module.exports = con;