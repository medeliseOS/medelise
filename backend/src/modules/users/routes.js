const router = require("express").Router();
const authenticate = require("../../middlewares/auth");
const controller = require("./controller");

router.get("/get-profile", authenticate, controller.dashboard);

module.exports = router;