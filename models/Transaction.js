const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, "Please add transaction text"],
  },
  category: {
    type: String,
    trim: true,
    required: [true, "Please add transaction category"],
  },
  amount: {
    type: Number,
    required: [true, "Please add a positive or negative number"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Transaction", TransactionSchema);
