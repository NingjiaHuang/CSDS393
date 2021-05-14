const {Pool} = require("pg");

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "cattery_database",
    password: "huang991004",
    port: 5432,
});

module.exports = {
    query:(text, params) => pool.query(text, params),
};