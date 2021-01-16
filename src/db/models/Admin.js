const mongoose = require("mongoose");
const AdminSchema = new mongoose.Schema({
  username: String,
  email: String,
  firstName: String,
  lastName: String,
  password: String,
});
mongoose.model("Admin", AdminSchema);

module.exports = mongoose.model("Admin");
