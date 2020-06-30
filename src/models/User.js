const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
const passportLocal = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

userSchema.plugin(passportLocal, { usernameField: "email" });

module.exports = mongoose.model("User", userSchema);
