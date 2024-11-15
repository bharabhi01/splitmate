import React from "react";
import AddExpenses from "../components/BudgetTracker/AddExpenses";
import ViewExpenses from "../components/BudgetTracker/ViewExpenses";
import SetBudget from "../components/BudgetTracker/Budget/SetBudget";

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <AddExpenses />
            <ViewExpenses />
            <SetBudget />
        </div>
    );
};

export default Dashboard;