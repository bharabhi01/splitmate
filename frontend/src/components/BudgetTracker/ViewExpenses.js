import React, { useState, useEffect } from 'react';
import expenseService from '../../services/expenseService';
import { Table } from 'semantic-ui-react';

const ViewExpenses = () => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        const fetchExpenses = async () => {
            const data = await expenseService.getExpenses();
            setExpenses(data);
        };
        fetchExpenses();
    }, []);

    return (
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
    )
}

export default ViewExpenses;