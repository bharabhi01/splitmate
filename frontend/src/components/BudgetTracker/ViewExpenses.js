import React, { useState, useEffect } from 'react';
import expenseService from '../../services/expenseService';
import budgetService from '../../services/budgetService';
import { Segment, Table, Grid, Divider } from 'semantic-ui-react';
import SetBudget from './Budget/SetBudget';
import AddExpenses from './AddExpenses';

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
            <Segment placeholder>
                <Grid columns={2} stackable textAlign='center'>
                    <Divider vertical>
                        <SetBudget />
                    </Divider>
                    <Grid.Row verticalAlign='middle'>
                        <Grid.Column>
                            Expense Remaining: ${budgetData.expenseRemaining}
                        </Grid.Column>
                        <Grid.Column>
                            Investment Remaining: ${budgetData.investmentRemaining}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
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
            {/* <AddExpenses /> */}
        </Segment>

    )
}

export default ViewExpenses;