// src/auth/Signup.js
import React, { useState } from 'react';
import { Form, Button, Message, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import authService from '../services/authService';
import '../styles/signup.css';

const Signup = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

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
        setSuccess(false);

        try {
            await authService.signUp(
                formData.firstName,
                formData.lastName,
                formData.username,
                formData.email,
                formData.password
            );
            setLoading(false);
            setSuccess(true);
            setFormData({ firstName: '', lastName: '', username: '', email: '', password: '' });
        } catch (err) {
            setLoading(false);
            setError(err || 'Something went wrong. Please try again.');
        }
    };

    return (
        <Grid style={{ margin: '50px' }}>
            <Grid.Row>
                <Grid.Column width={8}>
                    {/* You can add an image or introductory text here if desired */}
                </Grid.Column>
                <Grid.Column width={8}>
                    <h1>Create an account</h1>
                    <h3>Already have an account? <Link to="/login">Login</Link></h3>
                    <Form onSubmit={handleSubmit} loading={loading} error={!!error} success={success}>
                        <Grid style={{ marginBottom: '1px' }}>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <Form.Input
                                        icon='user'
                                        iconPosition='left'
                                        placeholder="Enter your first name"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                    />
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <Form.Input
                                        icon='user'
                                        iconPosition='left'
                                        placeholder="Enter your last name"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                    />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        <Form.Input
                            icon='user circle'
                            iconPosition='left'
                            placeholder="Enter a username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                        <Form.Input
                            icon='mail'
                            iconPosition='left'
                            placeholder="Enter your email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <Form.Input
                            icon='lock'
                            iconPosition='left'
                            placeholder="Enter your password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <Button primary type="submit" className="signup-button">Sign Up</Button>
                        {error && <Message error header="Error" content={error} />}
                        {success && <Message success header="Success" content="Account created successfully!" />}
                    </Form>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

export default Signup;
