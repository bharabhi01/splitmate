import React, { useState } from "react";
import AddExpenses from "../components/BudgetTracker/AddExpenses";
import ViewExpenses from "../components/BudgetTracker/ViewExpenses";


const Dashboard = () => {
    
    return (
        <div>
            <h1>Dashboard</h1>
            
            <ViewExpenses />
            <AddExpenses />
        </div>
    );
};

export default Dashboard;