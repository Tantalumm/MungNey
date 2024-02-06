const mongoose = require('mongoose')
const url = "mongodb://127.0.0.1:27017/MungNey"

const connectDB = async () =>{
    try{
        await mongoose.connect(url)
        console.log("connected successfully!!!")
    }
    catch(err){
        console.log(err)
    }
}

module.exports = connectDB;