const express = require("express");
const { createForm, addFieldsToForm, getAllForms } = require("../../controllers/admin/formController");
const { adminOnly, authMiddleware } = require("../../middleware/authMiddleware");

const router = express.Router();

router.post("/",authMiddleware, adminOnly, createForm);
router.get("/", authMiddleware, adminOnly, getAllForms);
router.post("/:formId/fields",authMiddleware, adminOnly, addFieldsToForm);

module.exports = router;