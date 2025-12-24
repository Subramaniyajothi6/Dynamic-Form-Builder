const express = require("express");
const { submitForm } = require("../../controllers/user/submitController");
const { authMiddleware } = require("../../middleware/authMiddleware");
const router = express.Router();

router.post("/",authMiddleware, submitForm);

module.exports = router;