const express=require('express')
const User=require('../model/user')
const {login}=require('../controller/userController')
const userRouter=express.Router();

userRouter.get('/',(req,res)=>{
    res.render('login')
})

userRouter.post('/',login)

module.exports=userRouter;