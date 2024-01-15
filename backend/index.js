const express = require('express');
const app = express();
const mongoose = require('mongoose');
const ServiceRouter = require('./routers/servicesRouter.js');


const uri = "mongodb+srv://wattikorn:1234@cluster0.gsddzct.mongodb.net/?retryWrites=true&w=majority"
mongoose.Promise = global.Promise;
mongoose.connect(uri)
            .then(()=> console.log("connection successfully"))
            .catch((err) => console.error(err))

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use('/service',ServiceRouter)


app.listen(9753, () => {
    console.log("Here http://localhost:9753");
});