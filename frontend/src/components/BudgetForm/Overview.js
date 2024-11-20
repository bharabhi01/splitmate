import React from 'react';
import { Pie } from 'react-chartjs-2';

const Overview = ({ salary, expenseBudget, investmentBudget, getTotalExpenses, getTotalInvestments, chartData }) => {
    return (
        <div className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <div className="space-y-4">
                <div>
                    <p className="text-sm text-gray-600">Monthly Salary</p>
                    <p className="text-2xl font-bold">${salary}</p>
                </div>
                <div>
                    <p className="text-sm text-gray-600">Expense Budget</p>
                    <p className="text-2xl font-bold">${expenseBudget - getTotalExpenses()} remaining</p>
                </div>
                <div>
                    <p className="text-sm text-gray-600">Investment Budget</p>
                    <p className="text-2xl font-bold">${investmentBudget - getTotalInvestments()} remaining</p>
                </div>
                <div className="h-64">
                    <Pie data={chartData} options={{ maintainAspectRatio: false }} />
                </div>
            </div>
        </div>
    );
};

export default Overview;