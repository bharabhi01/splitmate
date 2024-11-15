import React, { useState, useEffect } from 'react';
import expenseService from '../../services/expenseService';
import budgetService from '../../services/budgetService';
import { Segment, Table } from 'semantic-ui-react';

const ViewExpenses = () => {
    const [expenses, setExpenses] = useState([]);
    const [budgetData, setBudgetData] = useState({
        expenseRemaining: 0,
        investmentRemaining: 0,
    });

    useEffect(() => {
        const fetchExpenses = async () => {
            const expenseData = await expenseService.getExpenses();
            const budgetData = await budgetService.getBudgetOverview();
            setExpenses(expenseData);
            setBudgetData(budgetData);
        };
        fetchExpenses();
    }, []);

    return (
        <Segment>
            <div>
                <h3>Budget Overview</h3>
                <p>Expense Remaining: ${budgetData.expenseRemaining} </p>
                <p>Investment Remaining: ${budgetData.investmentRemaining} </p>
            </div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Category</Table.HeaderCell>
                        <Table.HeaderCell>Amount</Table.HeaderCell>
                        <Table.HeaderCell>Date</Table.HeaderCell>
                        <Table.HeaderCell>Tag</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {expenses.map((expense) => (
                        <Table.Row key={expense._id}>
                            <Table.Cell>{expense.category}</Table.Cell>
                            <Table.Cell>{expense.amount}</Table.Cell>
                            <Table.Cell>{new Date(expense.date).toLocaleDateString()}</Table.Cell>
                            <Table.Cell>{expense.tag}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </Segment>
    )
}

export default ViewExpenses;