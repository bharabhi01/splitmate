import React from "react";
import AddExpenses from "../components/BudgetTracker/AddExpenses";
import ViewExpenses from "../components/BudgetTracker/ViewExpenses";

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <AddExpenses />
            <ViewExpenses />
        </div>
    )
}

export default Dashboard;