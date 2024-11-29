const express=require('express')
const {isUserAuthenticated}=require('../middleware')
const homeRouter=express.Router();

homeRouter.get('/',(req,res)=>{
    res.render('home')
})

homeRouter.post('/',isUserAuthenticated,(req,res)=>{
    if(!req.session.username){
      return res.redirect('/login')
    }
    res.render('home',{username : req.session.username})
})

module.exports=homeRouter;