const mongoose = require("mongoose");

const fieldOptionSchema = new mongoose.Schema({
  field_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "FormField",
    required: true
  },
  option_text: String
});

module.exports = mongoose.model("FieldOption", fieldOptionSchema);
