const express = require("express");
const router = express.Router();
const controller = require("../../controllers/company");

router.get("", controller.getAllCompanies);
router.post("/create", controller.createCompany);
router.put("/update/:id", controller.updateCompany);
router.delete("/delete/:id", controller.deleteCompany);

module.exports = router;
