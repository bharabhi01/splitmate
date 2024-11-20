import React from 'react';

const TransactionList = ({ transactions, selectedMonth, setSelectedMonth, selectedTag, setSelectedTag, uniqueTags }) => {
    const filteredTransactions = transactions.filter(t => {
        const transactionMonth = t.date.substring(0, 7);
        return (
            (!selectedMonth || transactionMonth === selectedMonth) &&
            (!selectedTag || t.tag === selectedTag)
        );
    });

    return (
        <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Transactions</h2>
                <div className="flex gap-4">
                    <select
                        value={selectedMonth}
                        onChange={(e) => setSelectedMonth(e.target.value)}
                        className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    >
                        <option value="">All Months</option>
                        {[...new Set(transactions.map(t => t.date.substring(0, 7)))].map(month => (
                            <option key={month} value={month}>{month}</option>
                        ))}
                    </select>
                    <select
                        value={selectedTag}
                        onChange={(e) => setSelectedTag(e.target.value)}
                        className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    >
                        <option value="">All Tags</option>
                        {uniqueTags.map(tag => (
                            <option key={tag} value={tag}>{tag}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mode</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tag</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {filteredTransactions.map((transaction) => (
                            <tr key={transaction.id}>
                                <td className="px-6 py-4 whitespace-nowrap">{transaction.date}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{transaction.description}</td>
                                <td className="px-6 py-4 whitespace-nowrap capitalize">{transaction.type}</td>
                                <td className="px-6 py-4 whitespace-nowrap uppercase">{transaction.mode}</td>
                                <td className="px-6 py-4 whitespace-nowrap">${transaction.amount}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{transaction.tag}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TransactionList;