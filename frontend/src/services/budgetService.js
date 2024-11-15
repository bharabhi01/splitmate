import axios from "axios";

const API_URL = `${process.env.REACT_APP_API_URL}/api/auth`;

const setBudget = async (budgetData) => {
    return await axios.post(`${API_URL}/set`, budgetData);
};

const getBudgetOverview = async () => {
    const response = await axios.get(`${API_URL}/overview`);
    return response.data;
};

const updateBudget = async (amount) => {
    return await axios.put(`${API_URL}/updateBudget`, { amount });
}

export default { setBudget, getBudgetOverview, updateBudget };