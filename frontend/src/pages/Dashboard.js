import React from "react";
import AddExpenses from "../components/BudgetTracker/AddExpenses";
import ViewExpenses from "../components/BudgetTracker/ViewExpenses";
import BudgetOverview from "../components/BudgetTracker/Budget/BudgetOverview";
import SetBudget from "../components/BudgetTracker/Budget/SetBudget";

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <AddExpenses />
            <ViewExpenses />
            <SetBudget />
            <BudgetOverview />
        </div>
    );
};

export default Dashboard;