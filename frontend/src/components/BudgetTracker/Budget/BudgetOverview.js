import React, { useEffect, useState } from "react";
import budgetService from "../../../services/budgetService";

const BudgetOverview = () => {
    const [budgetData, setBudgetData] = useState({
        expenseRemaining: 0,
        investmentRemaining: 0,
    });

    useEffect(() => {
        const fetchBudgetData = async () => {
            const data = await budgetService.getBudgetOverview();
            setBudgetData(data);
        };
        fetchBudgetData();
    }, []);

    return (
        <div>
            <h3>Budget Overview</h3>
            <p>Expense Remaining: ${budgetData.expenseRemaining} </p>
            <p>Investment Remaining: ${budgetData.investmentRemaining} </p>
        </div>
    )
}

export default BudgetOverview;