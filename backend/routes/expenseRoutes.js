const express = require('express');
const { addExpense, getExpenses } = require('../controllers/expenseController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.route('/').post(protect, addExpense);
router.route('/').get(protect, getExpenses);

module.exports = router;
