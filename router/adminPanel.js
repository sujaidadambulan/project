const express=require('express')
const { fetchUsers, createUser, deleteUser, editUser } = require('../controller/adminController');
const adminPanelRouter=express.Router();
const User= require ('../model/user')
const {isAdminAuthenticated}=require('../middleware')


adminPanelRouter.get('/', isAdminAuthenticated, fetchUsers);
adminPanelRouter.get('/create',createUser)
adminPanelRouter.post('/edit/:id', editUser);  

// adminPanelRouter.get('/edit/:id', async (req, res) => {
//     const user = await User.findById(req.params.id);
//     res.render('edit-user', { user });
// });

adminPanelRouter.post('/delete/:id', deleteUser);  


module.exports=adminPanelRouter;