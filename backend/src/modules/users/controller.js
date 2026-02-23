// const pool = require("../../db/pool");
const { createLog } = require("../../utils/common")
const APIErrorLog = createLog("API_error_log");


exports.dashboard = async (req, res) => {
    try {
        const user = req.user;

        return res.status(200).send({
            status: 200,
            data: {
                id: user.id,
                email: user.email,
                first_name: user.user_metadata.prenume,
                last_name: user.user_metadata.nume,
                username: user.user_metadata.username,
                birthDay: user.user_metadata.birthDay,
                birthMonth: user.user_metadata.birthMonth,
                birthYear: user.user_metadata.birthYear
            },
            message: `Welcome ${user.user_metadata.prenume} ${user.user_metadata.nume}`
        });

    } catch (error) {
        APIErrorLog.error("Error while registering user");
        APIErrorLog.error(error);
        return res.status(500).send({ message: error.message });
    }
};

