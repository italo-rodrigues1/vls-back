const express = require("express");
const router = express.Router();
const controller = require("../../controllers/place");
console.log("Aqui 4");
router.get("", controller.getAllPlaces);
router.get("/:id", controller.getOnePlace);
router.post("/create", controller.createPlace);
router.delete("/delete/:id", controller.deletePlace);

module.exports = router;
