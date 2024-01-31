const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, requires: [true, "name is required"] },
    password: { type: String, requires: [true, "password is required"] },
    id: { type: String, requires: [true, "id is required"] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users",UserSchema)