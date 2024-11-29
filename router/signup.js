const express=require('express')
const User = require('../model/user');
const {signup}= require('../controller/userController')
const signupRouter=express.Router();

signupRouter.get('/',(req,res)=>{
    res.render('signup')
})

signupRouter.post('/',signup)

module.exports=signupRouter;