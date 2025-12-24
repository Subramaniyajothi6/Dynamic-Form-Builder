const mongoose = require("mongoose");

const formSchema = new mongoose.Schema(
  {
    form_name: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Form", formSchema);
