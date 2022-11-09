const express = require("express");
const router = express.Router();
const verifyJwt = require("../middlewares/jwtVerify");

console.log("Aqui 2");
router.use("/user", verifyJwt, require("./aplication/user"));
router.use("/place", verifyJwt, require("./aplication/place"));
router.use("/company", verifyJwt, require("./aplication/company"));

module.exports = router;
