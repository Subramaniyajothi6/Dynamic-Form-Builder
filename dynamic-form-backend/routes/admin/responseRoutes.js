const express = require("express");
const { getResponsesByForm, getSingleResponse } = require("../../controllers/admin/responseController");
const { authMiddleware, adminOnly } = require("../../middleware/authMiddleware");


const router = express.Router();

router.get("/form/:formId",authMiddleware,adminOnly, getResponsesByForm);
router.get("/:responseId",authMiddleware,adminOnly, getSingleResponse);

module.exports = router;