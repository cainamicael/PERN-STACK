const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres', //default
    password: 'admin',
    host: 'localhost',
    port: 5432, //default
    database: 'todolist'
})

module.exports = pool
