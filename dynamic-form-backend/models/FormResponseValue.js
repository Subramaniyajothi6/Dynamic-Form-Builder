const mongoose = require("mongoose");

const formResponseValueSchema = new mongoose.Schema({
  response_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "FormResponse",
    required: true
  },
  field_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "FormField",
    required: true
  },
  value: mongoose.Schema.Types.Mixed
});

module.exports = mongoose.model(
  "FormResponseValue",
  formResponseValueSchema
);
