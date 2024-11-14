const Budget = require("../models/Budget");

exports.setBudget = async (req, res) => {
    const { expenseBudget, investmentBudget } = req.body;
    const userId = req.user._id;

    try {
        let budget = await Budget.findOne({ userId });

        if (!budget) {
            budget = new Budget({
                userId,
                expenseBudget,
                investmentBudget,
                expenseRemaining: expenseBudget,
                investmentRemaining: investmentBudget,
            });
        } else {
            budget.expenseBudget = expenseBudget;
            budget.investmentBudget = investmentBudget;
            budget.expenseRemaining = expenseBudget;
            budget.investmentRemaining = investmentBudget;
        }

        await budget.save();
        res.status(200).json({ message: 'Budgets set successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.getBudgetOverview = async (req, res) => {
    const userId = req.user._id;

    try {
        const budget = await Budget.findOne({ userId });

        if (!budget) {
            return res.status(404).json({ message: 'Budget not found' });
        }

        res.status(200).json({
            expenseRemaining: budget.expenseRemaining,
            investmentRemaining: budget.investmentRemaining,
        });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.updateRemainingBudget = async (req, res) => {
    const { amount } = req.body;
    const userId = req.user._id;

    try {
        const budget = await Budget.findOne({ userId });
        budget.expenseRemaining -= amount;

        await budget.save();
        res.status(200).json({ message: 'Budget updated successfully!', budget });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
};