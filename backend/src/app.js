const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

const allowedOrigins = new Set([
    "http://localhost:5173",
    "http://localhost:3000"
]);

app.use(
    cors({
        origin(origin, callback) {
            if (!origin) return callback(null, true);
            if (allowedOrigins.has(origin)) return callback(null, true);
            return callback(new Error("CORS blocked"));
        },
        credentials: true,
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
        allowedHeaders: [
            "Content-Type",
            "Authorization",
            "ngrok-skip-browser-warning"
        ]
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.get("/health", (_, res) => {
    res.status(200).json({ status: "OK" });
});

module.exports = app;
