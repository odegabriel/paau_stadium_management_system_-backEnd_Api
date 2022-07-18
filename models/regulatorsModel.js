const mongoose = require('mongoose')


const regulatorsModels = mongoose.Schema({
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
    age : {
        type : String,
        required : true
    },
    dateOfBirth : {
        type : String,
        required : true
    },
    phoneNumber : {
        type : String,
        
    },
    password : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model("regulatorsModels", regulatorsModels)