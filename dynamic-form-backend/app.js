const express = require("express");
const cors = require("cors");

const adminFormRoutes = require("./routes/admin/formRoutes");
const adminResponseRoutes = require("./routes/admin/responseRoutes");
const userFormRoutes = require("./routes/user/formRoutes");
const userSubmitRoutes = require("./routes/user/submitRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.options("*", cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

// ADMIN ROUTES
app.use("/api/admin/forms", adminFormRoutes);
app.use("/api/admin/responses", adminResponseRoutes);

// USER ROUTES
app.use("/api/user/forms", userFormRoutes);
app.use("/api/user/submit", userSubmitRoutes);

app.get("/", (req, res) => {
  res.send("Dynamic Form API running");
});

module.exports = app;
