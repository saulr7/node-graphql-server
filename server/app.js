const express = require("express");
const cors = require("cors");

const app = express();

// Middlewares
app.use(express.json());
app.use("*", cors());

app.get("/", (req, res) => {
  res.json({ msg: "ok" });
});

module.exports = app;
