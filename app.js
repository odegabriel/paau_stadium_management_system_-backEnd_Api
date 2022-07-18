// paau stadium management system backend
const User = require('./models/userModel')
const router = require('./router/allRoutes')
const admin = require('./controller/admin')

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')


let url = "mongodb+srv://odegabriel:911922@cluster0.nxlpu.mongodb.net/?retryWrites=true&w=majority"
;
mongoose.connect(url,
    {
      useNewUrlParser : true,
    useUnifiedTopology : true
    })
    .then(console.log("mongodb is connected"))
    .catch(e => console.log(e))




const app = express();

app.use(cors())
app.use(express.json())

app.use(router)


app.listen(3002, (console.log('server is runing')))

