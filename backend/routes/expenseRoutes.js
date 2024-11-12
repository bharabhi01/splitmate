const express = require('express');
const { addExpense, getExpenses } = require('../controllers/expenseController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/getexpense', protect, getExpenses);
router.post('/setexpense', protect, addExpense);

module.exports = router;
