import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import toast, { Toaster } from 'react-hot-toast';
import BudgetForm from './BudgetForm';
import TransactionForm from './TransactionForm';
import Overview from './Overview';
import TransactionList from './TransactionList';

ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
    const [salary, setSalary] = useState(0);
    const [expenseBudget, setExpenseBudget] = useState(0);
    const [investmentBudget, setInvestmentBudget] = useState(0);
    const [transactions, setTransactions] = useState([]);
    const [selectedMonth, setSelectedMonth] = useState(format(new Date(), 'yyyy-MM'));
    const [selectedTag, setSelectedTag] = useState('');
    const [showBudgetForm, setShowBudgetForm] = useState(true);

    const [newTransaction, setNewTransaction] = useState({
        description: '',
        date: format(new Date(), 'yyyy-MM-dd'),
        mode: 'cash',
        amount: '',
        tag: '',
        type: 'expense'
    });

    useEffect(() => {
        const remainingExpenseBudget = expenseBudget - getTotalExpenses();
        if (remainingExpenseBudget <= expenseBudget * 0.2 && remainingExpenseBudget > 0) {
            toast.error('Warning: Your expense budget is running low!');
        }
    }, [transactions, expenseBudget]);

    const getTotalExpenses = () => {
        return transactions
            .filter(t => t.type === 'expense')
            .reduce((sum, t) => sum + Number(t.amount), 0);
    };

    const getTotalInvestments = () => {
        return transactions
            .filter(t => t.type === 'investment')
            .reduce((sum, t) => sum + Number(t.amount), 0);
    };

    const handleBudgetSubmit = (e) => {
        e.preventDefault();
        setShowBudgetForm(false);
    };

    const handleTransactionSubmit = (e) => {
        e.preventDefault();

        const amount = Number(newTransaction.amount);
        if (newTransaction.type === 'expense' && amount > (expenseBudget - getTotalExpenses())) {
            toast.error('Amount exceeds remaining expense budget!');
            return;
        }
        if (newTransaction.type === 'investment' && amount > (investmentBudget - getTotalInvestments())) {
            toast.error('Amount exceeds remaining investment budget!');
            return;
        }

        setTransactions([...transactions, { ...newTransaction, id: Date.now() }]);
        setNewTransaction({
            description: '',
            date: format(new Date(), 'yyyy-MM-dd'),
            mode: 'cash',
            amount: '',
            tag: '',
            type: 'expense'
        });
    };

    const chartData = {
        labels: ['Expenses', 'Investments', 'Savings'],
        datasets: [{
            data: [
                getTotalExpenses(),
                getTotalInvestments(),
                salary - getTotalExpenses() - getTotalInvestments()
            ],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        }]
    };

    const uniqueTags = [...new Set(transactions.map(t => t.tag))];

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <Toaster position="top-right" />

            {showBudgetForm ? (
                <BudgetForm
                    salary={salary}
                    setSalary={setSalary}
                    expenseBudget={expenseBudget}
                    setExpenseBudget={setExpenseBudget}
                    investmentBudget={investmentBudget}
                    setInvestmentBudget={setInvestmentBudget}
                    onSubmit={handleBudgetSubmit}
                />
            ) : (
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <TransactionForm
                            newTransaction={newTransaction}
                            setNewTransaction={setNewTransaction}
                            onSubmit={handleTransactionSubmit}
                        />
                        <Overview
                            salary={salary}
                            expenseBudget={expenseBudget}
                            investmentBudget={investmentBudget}
                            getTotalExpenses={getTotalExpenses}
                            getTotalInvestments={getTotalInvestments}
                            chartData={chartData}
                        />
                    </div>

                    <TransactionList
                        transactions={transactions}
                        selectedMonth={selectedMonth}
                        setSelectedMonth={setSelectedMonth}
                        selectedTag={selectedTag}
                        setSelectedTag={setSelectedTag}
                        uniqueTags={uniqueTags}
                    />
                </div>
            )}
        </div>
    );
};

export default Dashboard;