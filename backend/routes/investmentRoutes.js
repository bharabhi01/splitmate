const express = require('express');
const { addInvestment, getInvestments } = require('../controllers/investmentController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.route('/').post(protect, addInvestment);
router.route('/').get(protect, getInvestments);

module.exports = router;
