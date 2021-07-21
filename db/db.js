const mongoose = require("mongoose");

const todoSchema = require("../schemas/todoSchema");

const mongoDBURL = process.env.MONGO_DB_URL;

mongoose.connect(mongoDBURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const Todos = mongoose.model("Todos", todoSchema);

module.exports = {
  Todos,
};
