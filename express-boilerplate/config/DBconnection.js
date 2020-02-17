const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/votation")
  .then(console.log("Mongoose connected to votation"))
  .catch(err => console.log("MONGO CONN ERR " + err));

const db = mongoose.connection;

module.exports = db;
