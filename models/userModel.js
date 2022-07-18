//registered user

const mongoose = require('mongoose')


const User = mongoose.Schema (
    {
        name : {
            firstName : {
                type : String, 
                required : true
            },
            lastName : {
                type : String,
                required : true
            }
        },
        age : {
            type : String,
            required : true
        },
        dateOfBirth : {
            type : String,
            required : true
        },
        phoneNo : {
            type : String,
            required : true
        },
        email : {
            type : String,
            required : true,
            unique : true
        },

        password : {
            type : String,
            required : true
        },

    })


    module.exports = mongoose.model("User", User)