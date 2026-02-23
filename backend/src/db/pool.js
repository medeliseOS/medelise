require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({
    host: "127.0.0.1",
    port: 5432,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    max: 50,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
    ssl: false
});

pool.on("error", () => {
    process.exit(1);
});

module.exports = pool;


