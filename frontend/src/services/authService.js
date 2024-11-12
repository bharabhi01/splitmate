import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_URL}/api/auth`;
console.log(API_URL);

const signUp = async (firstName, lastName, username, email, password) => {
    try {
        const response = await axios.post(`${API_URL}/signup`, {
            firstName,
            lastName,
            username,
            email,
            password
        });

        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
        }

        return response.data;
    } catch (error) {
        throw error.response?.data?.message || "Failed to sign up!";
    }
};

const login = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, {
            email,
            password
        })

        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
        }

        return response.data;
    } catch (error) {
        throw error.response?.data?.message || 'Failed to login';
    }
};

const logout = () => {
    localStorage.removeItem('token');
    return axios.post(`${API_URL}/logout`);
};

const getCurrentUser = () => {
    return localStorage.getItem('token');
};

export default { signUp, login, logout, getCurrentUser };