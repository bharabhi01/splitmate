const mongoose = require("mongoose");

const budgetSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    expenseBudget: {
        type: Number,
        required: true,
        default: 0,
    },
    investmentBudget: {
        type: Number,
        required: true,
        default: 0,
    },
    expenseRemaining: {
        type: Number,
        required: true,
        default: 0,
    },
    investmentRemaining: {
        type: Number,
        required: true,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Budget", budgetSchema);
