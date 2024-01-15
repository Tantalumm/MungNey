const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema(
  {
    title: { type: String, requires: [true, "title is required"] },
    amount: { type: Number, requires: [true, "amount is required"] },
    description: { type: String, requires: [true, "amount is required"] },
    status: { type: String, requires: [true, "status is required"] },
    time: { type: String, requires: [true, "time is required"] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("service", ServiceSchema);
