const express = require('express');
const app = express();
const mongoose = require('mongoose');
const ServiceRouter = require('./routers/Services.js');


const uri = "mongodb+srv://wattikorn:1234@cluster0.gsddzct.mongodb.net/?retryWrites=true&w=majority"
mongoose.Promise = global.Promise;
mongoose.connect(uri)
            .then(()=> console.log("connection successfully"))
            .catch((err) => console.error(err))


app.use(express.json());

app.get('/', (request ,response) =>{
    response.send("Home");
});

app.get('/credit',(request ,response) => {

    response.send("Credit");
});

app.get('/profile',(request, response) =>{
    response.send("profile");
});

app.get('/service',(request, response) =>{
    response.send("service");
});


app.use('/service',ServiceRouter)

app.listen(9753, () => {
    console.log("Here http://localhost:9753");
});