const express = require('express');
const dotenv = require('dotenv');
const { chats } = require("./data/data");
const connectDB = require('./config/db');
const colors = require('colors');
const userRoutes = require('./Routes/userRoutes');
const { errorhandler, notFound } = require("./Middleware/errorMiddleware");

dotenv.config();

connectDB();

const app = express();

// to accept JSON data
app.use(express.json());


app.get('/', (req, res) => {
    res.send("API is running");
});

app.use("/api/user", userRoutes);

app.use(notFound)
app.use(errorhandler)

const port = process.env.port || 8000
app.listen(8000, console.log(`port start on ${port}`.blue.italic));