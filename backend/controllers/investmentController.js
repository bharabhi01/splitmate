const Investment = require('../models/Investment');

exports.addInvestment = async (req, res) => {
    const { category, amount, date, tag } = req.body;
    try {
        const investment = new Investment({
            userId: req.user._id,
            category,
            amount,
            date,
            tag
        });

        await investment.save();
        res.status(201).json({ message: 'Investment added successfully!' });
    } catch (err) {
        res.status(500).json({ message: 'Error adding investment' });
    }
};

exports.getInvestments = async (req, res) => {
    try {
        const investments = await Investment.find({ userId: req.user._id });
        res.status(200).json(investments);
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving investments' });
    }
};
