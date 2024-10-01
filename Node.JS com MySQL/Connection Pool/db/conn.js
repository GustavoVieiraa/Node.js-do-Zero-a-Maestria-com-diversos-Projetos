const mysql = require('mysql')

const pool = mysql.createPool({

    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    port: 8000,
    password: '',
    database: 'nodemysql'

})

module.exports = pool