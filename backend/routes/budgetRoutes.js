const express = require("express");
const { setBudget, getBudgetOverview, updateRemainingBudget } = require("../controllers/budgetController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/set", protect, setBudget);
router.get("/overview", protect, getBudgetOverview);
router.put('/updateBudget', protect, updateRemainingBudget);

module.exports = router;