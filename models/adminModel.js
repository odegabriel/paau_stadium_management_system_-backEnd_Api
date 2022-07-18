const mongoose = require('mongoose')


const adminModel = mongoose.Schema({
    name : {
        firstName : {
            type : String,
            required : true
        },
        lastName : {
            type: String,
            required : true
        },
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    
    phoneNo : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model("adminModel", adminModel)