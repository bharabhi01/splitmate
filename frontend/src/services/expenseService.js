import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_URL}/api/auth`;
console.log(API_URL);


const addExpense = async (expenseData) => {
    try {
        await axios.post(`${API_URL}/setexpense`, expenseData);
    } catch (error) {
        throw new Error('Failed to add expense');
    }
};

export default { addExpense };