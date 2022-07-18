const mongoose = require('mongoose')


const Ticket = mongoose.Schema({
    firstTeam : {
        type : String,
        required : true
    },
    secondTeam : {
        type : String,
        required : true
    },
    stadium : {
        type : String,
        required : true
    },
    time : {
        type : String,
        required : true
    },
    date : {
        type : String,
        required : true
    },
    sitNo : {
        type : String,
        required : true
    },
    userId : {
        type: String,
        required : true,
        
    },
    price : {
        type: String,
        required : true,
    }
}) 


module.exports = mongoose.model('Ticket',Ticket)