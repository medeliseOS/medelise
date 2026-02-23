const router = require("express").Router();

router.use("/api/users", require("../modules/users/routes"));

module.exports = router;
