const mongoose = require('mongoose')

const url = "mongodb+srv://wattikorn:1234@cluster0.gsddzct.mongodb.net/?retryWrites=true&w=majority"

const connectDB = () =>{
    try{
        mongoose.connect(url)
        console.log("connected successfully!!!")
    }
    catch(err){
        console.log(err)
    }
}

module.exports = connectDB;