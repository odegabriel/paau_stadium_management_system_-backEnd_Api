//admin control
const addMatchModel = require('../models/addMatchModel')
const adminModel = require('../models/adminModel')
const regulatorModels = require('../models/regulatorsModel')
const userModel = require('../models/userModel')




const create =(firstName,lastName,phoneNo,email,password)=>
{
    
    adminModel.create({
        name : {
            firstName : firstName,
            lastName : lastName
        },
        email : email,
        phoneNo : phoneNo,
        password: password

    })
    .then(date => console.log(date))
    .catch(e => console.log(e))

}


// const logIn =(req, res)=>
// {
//     let {email, password} = req.body
//     adminModel.findOne({email : email})
//     .then(data => 
//         {
            
//             if ( data.password === password ) 
//             {
                
//                 res.status(200).json(data)
//             }else
//             {
//                 res.status(201).json("password is incorrect")
//             }
//         })
//         .catch(e => console.log(e))
    
// }

async function logIn(req, res) {
    let {email, password} = req.body
    await adminModel.findOne({email : email})
    .then(data => 
        {
            
            if ( data.password === password ) 
            {
                console.log(data)
                res.status(200).json(data)
            }else
            {
                console.log('password not correct')
                res.status(201).json("password is incorrect")
            }
        })
        .catch(e => console.log(e))
    
}


const getAdmin =(req, res)=>
{
    let {id} = req.params
    adminModel.findById(id)
    .then(data => res.json(data))
    .catch(e => res.json('an error has occured'))
}

const regulators =(req,res)=>
{
    let { password, email, firstName, lastName, phoneNo, age, dateOfBirth} = req.body
    regulatorModels.create({
        name : {
            firstName : firstName,
            lastName : lastName
        },
        age : age,
        dateOfBirth : dateOfBirth,
        phoneNumber : phoneNo,
        email : email,
        password: password

    })
    .then(data => res.json(data))
    .catch(e => console.log(e))


}

const addMatch =(req, res)=>
{
    let {firstTeam, price, secondTeam, time, date, venue} = req.body
        addMatchModel.create({
            firstTeam : firstTeam,
            secondTeam : secondTeam,
            stadium : venue,
            time : time,
            date : date,
            price : price,
            
        })
        .then((data)=> {console.log(data); res.json({msg : "added succesfully"})})
        .catch(e => {console.log(e); res.json({msg : e})})
}

const updateMatch  =(req,res)=>
{
    let {id, firstTeam, price, secondTeam, time, date, stadium } = req.body
    addMatchModel.findByIdAndUpdate(id, 
        {
            firstTeam : firstTeam,
            secondTeam : secondTeam,
            time : time,
            date : date,
            statium : stadium,
            price : price

        })
        .then(() => res.json({msg : 'updated'}))
        .catch(()=> res.json({msg : 'an error has occured'}))
}

const remove =(req,res)=>
{
    let {id} = req.params
    addMatchModel.findByIdAndDelete(id)
    .then(()=> res.json({msg : 'deleted successfully'}))
    .catch(()=> res.json({msg : 'an error has occured'}))
}

const getAllUsers =(req, res)=>
{
    userModel.find()
    .then(data => res.json(data))
    .catch(e => res.json({msg : "somthin went wrong"}))
}

const getAllMacth =(req, res)=>
{
    addMatchModel.find()
    .then(data => res.json(data))
    .catch(e => res.json({msg : 'an error has occured'})) 
}

const deleteRegulator =(req,res)=>
{
    let {id} = req.params
    regulatorModels.findByIdAndDelete(id)
                   .then(()=> console.log('deleted'))
                   .catch(()=> console.log('an error has ooccured'))
}

const getRegulator =(req, res)=>
{
    let {id} = req.params
    regulatorModels.findOne({_id:id})
    .then(data => res.json(data))
    .catch(()=> res.json('an error has occured'))
}

module.exports = {  getAdmin,
                    getAllMacth,
                    create, 
                    addMatch, 
                    logIn, 
                    regulators, 
                    updateMatch,
                    deleteRegulator, 
                    remove, 
                    getAllUsers,
                    getRegulator}


