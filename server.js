const express=require('express')
const app=express()
const port = 5667
const path = require('path')
const adminRouter=require('./router/admin')
const userRouter=require('./router/user')
const adminPanelRouter=require('./router/adminPanel')
const homeRouter=require('./router/home')
const signupRouter=require('./router/signup')
const session=require('express-session')
const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/collections")

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: "secret key",
    resave: false,
    saveUninitialized: true,
}));

app.use('/admin',adminRouter)
app.use('/user',userRouter)
app.use('/home',homeRouter)
app.use('/adminPanel',adminPanelRouter)
app.use('/signup',signupRouter)

app.get('/', (req, res) => {
    if (req.session.username) {
        res.redirect('/home');
    } else if (req.session.admin) {
        res.redirect('/adminPanel');
    } else {
        res.redirect('/user');
    }
});


app.listen(port,()=>console.log((`http://localhost:${port}`)))