// add match model

const mongoose = require('mongoose')

const addMatch = mongoose.Schema({
    
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
    price : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model("addMatch", addMatch)