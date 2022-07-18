const regulatorsModels = require('../models/regulatorsModel')


// const logIn =(req,res)=>
// {
//     let {email,password} = req.body
//     regulatorsModels.fineOne({email : email})
//     .then(data => 
//         {
//             if (data.password === password) {
//                 res.status(200).json(data)
//             }else{
//                 res.json({msg : 'password in correct'})
//             }
//         })
//         .catch(e => console.log(e))
// }


async function logIn (req, res)
{
    let {email, password} = req.body
    await regulatorsModels.fineOne({email: email})
    .then(data =>
        {
            if (data.password === password) {
                                // res.status(200).json(data)
                                console.log(data)
                            }else{
                                console.log('password not correct')
                                // res.json({msg : 'password in correct'})
                            }
        } )
        .then(e => console.log(e))
}

const getAllRegulators =(req,res)=>
{
    regulatorsModels.find()
    .then(data => res.json(data))
    .catch(e => res.json({msg: "an error has occured"}))
}




module.exports = {logIn, getAllRegulators}