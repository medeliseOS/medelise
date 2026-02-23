const fs = require("fs");
const path = require("path");
const pool = require("./pool");

async function runMigrations() {
    try {
        const dir = path.join(__dirname, "migrations");

        const files = fs
            .readdirSync(dir)
            .filter(file => file.endsWith(".sql"))
            .sort();

        for (const file of files) {
            const filePath = path.join(dir, file);
            const sql = fs.readFileSync(filePath, "utf8");

            await pool.query(sql);
            console.log(`Run migration: ${file}`);
        }
        process.exit(0);
    } catch (error) {
        console.error("Migration failed:", error.message);
        process.exit(1);
    }
}

runMigrations();