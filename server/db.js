const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "postgres@Namimori26",
    host: "localhost",
    port: 5432,
    database: "perncrud"
});

module.exports = pool;