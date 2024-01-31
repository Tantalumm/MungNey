const express = require('express');
const app = express();
const mongoose = require('mongoose');
const ServiceRouter = require("./routers/servicesRouter");
const connectDB = require("./config/connectDB")

// callback Database
connectDB()


app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use('/service',ServiceRouter)


app.listen(9753, () => {
    console.log("Here http://localhost:9753");
});