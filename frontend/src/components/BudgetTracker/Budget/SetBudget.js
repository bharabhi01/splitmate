import React, { useState } from "react";
import { Form, Button, Message, Modal, Header, Icon, ModalContent, ModalActions } from 'semantic-ui-react';
import budgetService from "../../../services/budgetService";

const SetBudget = () => {
    const [expenseBudget, setExpenseBudget] = useState('');
    const [investmentBudget, setInvestmentBudget] = useState('');
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [open, setOpen] = React.useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await budgetService.setBudget({
                expenseBudget,
                investmentBudget
            });
            setSuccess('Budgets set successfully!');
            setError('');
        } catch (error) {
            setError('Failed to update budgets. Please try again.');
            setSuccess('');
        }

        setOpen(false);
    };

    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            size='large'
            trigger={<Button>Set Budget</Button>}
        >
            <Form onSubmit={handleSubmit}>
                <Form.Input
                    label="Monthly Expense Budget"
                    type="number"
                    placeholder="Enter your monthly expense budget"
                    value={expenseBudget}
                    onChange={(e) => setExpenseBudget(e.target.value)}
                    required
                />
                <Form.Input
                    label="Monthly Investment Budget"
                    type="number"
                    placeholder="Enter your monthly investment budget"
                    value={investmentBudget}
                    onChange={(e) => setInvestmentBudget(e.target.value)}
                    required
                />
                <Button color='black' onClick={() => setOpen(false)}>
                    Cancel
                </Button>
                <Button primary type="submit">Set Budget</Button>
                {success && <Message success content={success} />}
                {error && <Message error content={error} />}
            </Form>
        </Modal>
    )
};

export default SetBudget;