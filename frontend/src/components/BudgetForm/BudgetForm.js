import React from 'react';

const BudgetForm = ({ salary, setSalary, expenseBudget, setExpenseBudget, investmentBudget, setInvestmentBudget, onSubmit }) => {
    return (
        <div className="max-w-md mx-auto bg-white rounded-lg p-6 shadow-md mb-8">
            <h2 className="text-2xl font-bold mb-4">Set Monthly Budget</h2>
            <form onSubmit={onSubmit}>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Monthly Salary</label>
                        <input
                            type="number"
                            value={salary}
                            onChange={(e) => setSalary(Number(e.target.value))}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Expense Budget</label>
                        <input
                            type="number"
                            value={expenseBudget}
                            onChange={(e) => setExpenseBudget(Number(e.target.value))}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Investment Budget</label>
                        <input
                            type="number"
                            value={investmentBudget}
                            onChange={(e) => setInvestmentBudget(Number(e.target.value))}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                    >
                        Set Budget
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BudgetForm;