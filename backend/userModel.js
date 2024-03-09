let mongoose = require("mongoose");
let userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: { type: String },
});
const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
