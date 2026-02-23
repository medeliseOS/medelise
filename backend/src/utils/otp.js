const crypto = require("crypto");

exports.generateOTP = () => {
    return crypto.randomInt(100000, 999999).toString();
};

exports.generateFourDigitOTP = () => {
    return crypto.randomInt(1000, 10000).toString();
};

