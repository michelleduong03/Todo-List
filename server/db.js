const Pool = require("pg").Pool;

const pool = new Pool ({
    user: "postgres",
    password: "BobaTea121803",
    host: "localhost",
    port: 5432,
    database: "todolist"
});

module.exports = pool;