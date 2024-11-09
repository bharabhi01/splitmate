import React, { useState } from 'react';
import { Form, Button, Message, Segment, Image, Grid } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';
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
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/signup`, formData);
            setLoading(false);
            setSuccess(true);
            setFormData({ firstName: '', lastName: '', username: '', email: '', password: '' });
        } catch (err) {
            setLoading(false);
            setError(err.response?.data?.message || 'Something went wrong. Please try again.');
        }
    };

    return (
        <Grid style={{ margin: '50px' }}>
            <Grid.Row>
                <Grid.Column width={8}>
                    Hello
                </Grid.Column>
                <Grid.Column width={8}>
                    <h1>Create an account</h1>
                    <h3 >Already have an account? <Link to="/login">Login</Link></h3>
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