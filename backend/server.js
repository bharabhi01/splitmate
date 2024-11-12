const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const expenseRoutes = require("./routes/expenseRoutes");
const cors = require("cors");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true,
    })
);

app.use("/api/auth", authRoutes, expenseRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));