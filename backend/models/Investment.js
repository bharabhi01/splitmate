const mongoose = require('mongoose');

const investmentSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    category: String,
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    tag: String
});

module.exports = mongoose.model('Investment', investmentSchema);
