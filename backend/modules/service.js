const mongoose = require('mongoose');

/*const status = new mongoose.Schema({
    expend : String,
    revenue : String
})*/

const serviceSchema = new mongoose.Schema({
    title : String,
    amount : Number,
    detail : String,
    update_at : {type : Date, default : Date.now}

})

//module.exports = mongoose.model('status',status)
module.exports = mongoose.model("service",serviceSchema)