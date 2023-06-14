const dotenv = require("dotenv")
dotenv.config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db.config");
const usersRouter = require("./routes/user.router");


// port
const PORT = process.env.PORT || 8080


const app = express();

app.use(cors({
    origin: "*"
}));
app.use(express.json());

// home route
app.get("/", (_, response) => {
    response.send("Welcome to Backend Home ")
})


// All Routes
app.use("/users", usersRouter);

app.listen(PORT, () => {
    connectDB();
    console.log(`server running on http://localhost:${PORT}`)
})



