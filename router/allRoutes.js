const router = require('express').Router();
const user = require('../controller/login');
const admin = require('../controller/admin')
const regulators = require('../controller/regulators')


//user/logic

//user create account
router.post('/user/createaccount', user.create )
//user login
router.post('/user/login', user.logIn)
//get user
router.get('/user/:id', user.getUser)
//add match to users ticket
router.post('/user/:id/tickets', user.addTicket)
//get user Ticket
router.get('/:id/ticket', user.getUserticket)

//regulators/logic

//regulators login
router.post('/regulators/login', regulators.logIn )
//get a regulator
// router.get('regulator/:id', regulators.getReg)

//admin/logic
    //login
router.post('/admin/login', admin.logIn)
    //get admin
router.get('/admin/home/:id', admin.getAdmin)
    //register Regulators
router.post('/admin/regiter/regulators', admin.regulators)
    //get a regulator
router.get('/admin/:id/regulator', admin.getRegulator)
    //get all regulators
router.get('/admin/allregulators', regulators.getAllRegulators )
    //delete Regulator
router.delete('/admin/delete/:id/regulator', admin.deleteRegulator)
    //add match
router.post('/admin/addmatch', admin.addMatch )
        //update match
router.patch('/admin/updatematch', admin.updateMatch)
        //delete match
router.delete('/admin/:id/delete', admin.remove)
        //get all registered users
router.get('/admin/getusers', admin.getAllUsers)
        //get all match
router.get('/admin/getmatch', admin.getAllMacth)




module.exports = router
