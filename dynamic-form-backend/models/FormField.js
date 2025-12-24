const mongoose = require("mongoose");

const formFieldSchema = new mongoose.Schema({
  form_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Form",
    required: true
  },
  label: String,
  type: String,
  required: Boolean,
  placeholder: String,
  sort_order: Number
});

module.exports = mongoose.model("FormField", formFieldSchema);
