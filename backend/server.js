const dotenv = require("dotenv").config();
const express = require ("express");
const connectDB = require("./config/connectDB");
const mongoose = require("mongoose");
const Task = require("./models/taskModel");
const taskRoutes = require("./routes/taskRoute");
const cors =require ("cors")

const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors({
    origin: ["http://localhost:3000", "https://mern-task-app.onrender.com"]
}));
app.use("/api/tasks",taskRoutes);


//Routes
app.get("/", (req,res)=>{
    res.send("Home Page");
});

//Get or Read Tasks
app.get("/api/tasks", async(req, res)=>{
    try{
        const tasks = await Task.find()
        res.status(200).json(tasks)        //.limit(1);
    } catch {
        res.status(500).json({msg: error.message});
    }
});

const PORT = process.env.PORT || 5000;

mongoose
    .connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err)=>console.log(err));