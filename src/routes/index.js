const express = require("express");
const router = express.Router();
const verifyJwt = require("../middlewares/jwtVerify");

router.use("/user", verifyJwt, require("./application/user"));
router.use("/place", verifyJwt, require("./application/place"));
router.use("/company", verifyJwt, require("./application/company"));

module.exports = router;
