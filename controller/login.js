//user Account logic

const TicketModel = require('../models/TicketModel')
const User = require('../models/userModel')



   const create = ((req, res)=> 
    {
        let { password, email, firstName, lastName, phoneNo, age, dateOfBirth} = req.body
            User.create({
                name : {
                    firstName : firstName,
                    lastName : lastName
                },
                age : age,
                dateOfBirth : dateOfBirth,
                phoneNo : phoneNo,
                email : email,
                password: password
    
            })
            .then(data => res.json(data))
            .catch(e => res.json({msg : 'failed', e}))
    
    })

    const logIn =(req, res)=>
    {
        let {email, password} = req.body
        User.findOne({email : email})
        .then(data => 
            {
                if(data === null)
                {
                    res.json("email address does not exist")
                }else if (data.password === password) {
                    res.json(data)
                } else{
                    res.json("password is incorrect")
                }
                
                
            })
            .catch(e => console.log(e))
        
    }

    const getUser =(req, res) =>
    {
        let {id} = req.params
        User.findById(id)
        .then(data => res.json(data))
        .catch(()=> console.log('errr'))
    }

    // const addTicket =(req,res)=>
    // {
    //     //data.length+1
        
    //     // let {id} = req.params
    //     let {firstTeam, secondTeam, time, date, userId, stadium} = req.body
        
        
    //     TicketModel.find()
    //     .then(data => {
            
    //         let setNum = 0;
            
    //         if (data === null ) {
    //             setNum = 1
    //         }else {if (data.length >= 0) {
    //             setNum = data.length + 1
    //         }}

    //         TicketModel.create({
    //             firstTeam : firstTeam, 
    //             secondTeam : secondTeam, 
    //             time : time, 
    //             date : date, 
    //             userId :userId, 
    //             stadium : stadium,
    //             sitNo : setNum 
    //         })
    //         .then(data => {res.json(data)})
    //         .catch(e => console.log(e))
            
    //     })
    //     .catch(e => console.log(e))
        
       
    // }

    const addTicket = async (req, res) =>
    {
        let sitNo = 0;
        let {firstTeam, secondTeam, time, date, userId, stadium} = req.body
    await TicketModel.find()
        .then(data =>
            {
                if (data.length === 0) {
                    sitNo = 1
                }
                else if (data.length > 0) {
                    sitNo = data.length + 1
                }
            }
            )
            .catch(e => console.log(e));
    await TicketModel.create({
                            firstTeam : firstTeam, 
                            secondTeam : secondTeam, 
                            time : time, 
                            date : date, 
                            userId :userId, 
                            stadium : stadium,
                            sitNo : sitNo 
                        })
                        .then(data => {
                            console.log(data)
                            res.json(data)})
                        .catch(e => console.log(e))
    }

    const  getUserticket =(req, res)=>
    {
        let {id} = req.params
        console.log(id);
        TicketModel.findOne({_id : id})
        .then(data => res.json(data))
        .catch(e => console.log(e))

    }

    // const testing =(err, req, res, next)=>
    // {
    //     res.
    // }

    module.exports = {create, logIn, getUser, addTicket, getUserticket}

    // const get =(req,res)=>
    // {
    //     TicketModel.find()
    //     .then((data) => {
    //         join = data.firstTeam + data.secondTeam
    //         data.forEach((e, i)=> 
    //         {

    //         })
    //     })
    // }