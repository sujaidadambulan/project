const express=require('express')
const Admin=require('../model/admin')
const {adminSignup}= require('../controller/adminController')
const adminRouter=express.Router();

adminRouter.get('/',(req,res)=>{
    res.render('admin-login')
})

adminRouter.post('/',adminSignup)


module.exports=adminRouter;