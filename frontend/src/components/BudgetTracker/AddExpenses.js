import React, { useState } from "react";
import { Form, Button, Message } from "semantic-ui-react";
import expenseService from "../../services/expenseService";

const AddExpenses = () => {
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [tag, setTag] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await expenseService.addExpense({ category, amount, date, tag });
            setCategory('');
            setAmount('');
            setDate('');
            setTag('');
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <Form onSubmit={handleSubmit} error={!!error}>
            <Form.Input
                label="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />
            <Form.Input
                label="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <Form.Input
                label="Date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <Form.Input
                label="Tag"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
            />
            <Button type="submit">Add Expense</Button>
            {error && <Message error content={error} />}
        </Form>
    )
};

export default AddExpenses;