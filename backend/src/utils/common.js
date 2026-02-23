const crypto = require("crypto");

exports.humanize = (str) => {
    if (!str) return "";
    return str
        .trim()
        .split(/\s+/)
        .map((word) =>
            word
                .split("-")
                .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
                .join("-")
        )
        .join(" ");
};

exports.toArray = (value) => {
    if (!value) return [];
    if (Array.isArray(value)) return value;
    return value.split(",").map(i => i.trim()).filter(Boolean);
}

exports.generateSixDigitOTP = () => {
    return crypto.randomInt(100000, 1000000).toString();
};


exports.createLog = (logName) => {
    try {
        return require("simple-node-logger").createRollingFileLogger({
            logDirectory: "src/logs",
            fileNamePattern: logName + "_<DATE>.log",
            dateFormat: "YYYY_MM_DD",
            timestampFormat: "YYYY-MM-DD HH:mm:ss",
        });
    } catch (error) {
        throw error;
    }
};



