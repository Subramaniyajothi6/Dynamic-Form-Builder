// require("dotenv").config();
// const app = require("./app");
// const connectDB = require("./config/db");

// connectDB();

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

require("dotenv").config();
const app = require("./app");
const connectDB = require("./config/db");

let isConnected = false;

const connectOnce = async () => {
  if (isConnected) return;

  await connectDB();
  isConnected = true;
};

module.exports = async (req, res) => {
  await connectOnce();
  return app(req, res);
};
