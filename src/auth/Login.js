import React, { useState } from 'react';
import { Form, Button, Message } from 'semantic-ui-react';
import authService from '../services/authService';

const Login = ({ onLogin }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');

        try {
            const response = await authService.login(formData.email, formData.password);
            onLogin(response.token);
            setLoading(false);
            setSuccess(response.message);
        } catch (err) {
            setLoading(false);
            setError(err.response?.data?.message || 'Login failed. Please try again.');
        }
    };

    return (
        <div style={{ maxWidth: 400, margin: 'auto', padding: '2rem' }}>
            <h2>Login</h2>
            <Form onSubmit={handleSubmit} loading={loading} error={!!error}>
                <Form.Input
                    label="Email"
                    placeholder="Enter your email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <Form.Input
                    label="Password"
                    placeholder="Enter your password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <Button primary type="submit">Login</Button>
                {error && <Message error header="Error" content={error} />}
                {success && <Message success header="Success" content={success} />}
            </Form>
        </div>
    );
};

export default Login;
