const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const localPassport = require("passport-local-mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
});

UserSchema.plugin(localPassport, { usernameField: "email" });

module.exports = mongoose.model("User", UserSchema);
