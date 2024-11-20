import React from 'react';

const TransactionForm = ({ newTransaction, setNewTransaction, onSubmit }) => {
    return (
        <div className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4">Add Transaction</h2>
            <form onSubmit={onSubmit}>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Description</label>
                        <input
                            type="text"
                            value={newTransaction.description}
                            onChange={(e) => setNewTransaction({ ...newTransaction, description: e.target.value })}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Date</label>
                        <input
                            type="date"
                            value={newTransaction.date}
                            onChange={(e) => setNewTransaction({ ...newTransaction, date: e.target.value })}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Type</label>
                        <select
                            value={newTransaction.type}
                            onChange={(e) => setNewTransaction({ ...newTransaction, type: e.target.value })}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        >
                            <option value="expense">Expense</option>
                            <option value="investment">Investment</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Payment Mode</label>
                        <select
                            value={newTransaction.mode}
                            onChange={(e) => setNewTransaction({ ...newTransaction, mode: e.target.value })}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        >
                            <option value="cash">Cash</option>
                            <option value="card">Card</option>
                            <option value="upi">UPI</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Amount</label>
                        <input
                            type="number"
                            value={newTransaction.amount}
                            onChange={(e) => setNewTransaction({ ...newTransaction, amount: e.target.value })}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Tag</label>
                        <input
                            type="text"
                            value={newTransaction.tag}
                            onChange={(e) => setNewTransaction({ ...newTransaction, tag: e.target.value })}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                    >
                        Add Transaction
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TransactionForm;