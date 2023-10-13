const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            UseUnifiedTopology: true,
        });
        console.log(`MongoDB connected: ${conn.connection.host}`.blue.bold)
    } catch (error) {
        console.log(`error: ${error.message}`);
        process.exit();
    }

};

module.exports = connectDB;