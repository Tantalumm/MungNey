const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
  {
    name: { type: String, requires: [true, "name is required"] },
    email: { type: String, requires: [true, "email is required"] },
    password: { type: String, requires: [true, "password is required"] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users",userSchema)