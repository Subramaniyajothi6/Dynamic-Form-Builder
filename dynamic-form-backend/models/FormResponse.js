// const mongoose = require("mongoose");

// const formResponseSchema = new mongoose.Schema(
//   {
//     form_id: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Form",
//       required: true
//     }
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("FormResponse", formResponseSchema);

const mongoose = require("mongoose");

const formResponseSchema = new mongoose.Schema(
  {
    form_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Form",
      required: true
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("FormResponse", formResponseSchema);
