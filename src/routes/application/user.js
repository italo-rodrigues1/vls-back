const express = require("express");
const router = express.Router();
const controller = require("../../controllers/user");

router.get("", controller.getAllUsers);
router.get("/logout", controller.logout);

// router.post("/user/:id", controller.getOneUser);
// router.put("/update/:id", controller.updateUser);
// router.delete("/delete/:id", controller.deleteUser);

module.exports = router;
