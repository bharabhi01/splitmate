const Expense = require('../models/Expense');

exports.addExpense = async (req, res) => {
    const { category, amount, date, tag } = req.body;
    try {
        const expense = new Expense({
            userId: req.user._id,
            category,
            amount,
            date,
            tag
        });

        await expense.save();
        res.status(201).json({ message: 'Expense added successfully!' });
    } catch (err) {
        res.status(500).json({ message: 'Error adding expense' });
    }
};

exports.getExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find({ userId: req.user._id });
        res.status(200).json(expenses);
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving expenses' });
    }
};
