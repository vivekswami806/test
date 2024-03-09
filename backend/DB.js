const mongoose = require("mongoose");

async function DbConnect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/testUser');

        console.log("Database connected successfully!");
    } catch (error) {
        console.error("Database connection error:", error);
    }
}

module.exports = DbConnect;
