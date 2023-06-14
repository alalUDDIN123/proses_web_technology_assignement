const mongoose = require('mongoose')

mongoose.set("strictQuery", false);

const connectDB = () => {
    try {
        mongoose.connect(process.env.MONGO_URL)
        console.log("Database connection established successfully");
    } catch (error) {
        console.log(error);
        console.log("Database Error, Unable to Connect!");
    }
}

module.exports = connectDB