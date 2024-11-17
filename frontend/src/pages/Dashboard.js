import React, { useState } from "react";
import AddExpenses from "../components/BudgetTracker/AddExpenses";
import ViewExpenses from "../components/BudgetTracker/ViewExpenses";

const Dashboard = () => {
    return (
        <div style={{ width: '100%', padding: '10px' }}>
            <ViewExpenses />
            <AddExpenses />
        </div>
    );
};

export default Dashboard;