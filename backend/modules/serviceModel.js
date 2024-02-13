const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    userid: { type: String, required: true, },
    title: { type: String, required: [true, "title is required"] },
    amount: { type: Number, required: [true, "amount is required"] },
    type: { type: String, required: [true, "type is required"] },
    category: { type: String, required: [true, "category is required"] },
    description: { type: String },
    date: { type: String, required: [true, "date is required"] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("services", serviceSchema);
