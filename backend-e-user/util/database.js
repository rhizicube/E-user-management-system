const mysql = require('mysql2');

const con = mysql.createPool({
    host: 'localhost',
    user: 'Shubhi',
    database: 'nodeData',
    password: 'rhizi01234'
})

module.exports = con;