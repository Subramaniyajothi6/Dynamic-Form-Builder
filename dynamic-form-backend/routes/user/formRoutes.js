const express = require("express");
const { getAllForms, getFormById } = require("../../controllers/user/formController");
const { authMiddleware } = require("../../middleware/authMiddleware");

const router = express.Router();

router.get("/",authMiddleware, getAllForms);
router.get("/:id",authMiddleware, getFormById);

module.exports = router;