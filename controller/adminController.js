const User = require ('../model/user')
const Admin= require ('../model/admin')

const adminSignup = async (req, res) => {
    const { username, password } = req.body;
    try {
        const admin = await Admin.findOne({ username, password });
        if (admin) {
            req.session.admin = true;
            res.redirect('/adminPanel');
        } else {
            res.render('admin-login', { error: 'Invalid credentials' });
        }
    } catch (error) {
        console.error('Error during admin login:', error);
        res.render('admin-login', { error: 'Something went wrong' });
    }
};


const fetchUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.render('admin-panel', { users });
    } catch (error) {
        console.error('Error fetching users:', error)
        res.render('admin-panel', { error: 'Failed to load users' });
    }
};

const createUser = async (req, res) => {
    const { username, password, email } = req.body;
    if (!username || !password || !email) {
        return res.render('admin-panel', { error: 'All fields are required' });
    }
    try {
        const newUser = new User({ username, password, email });
        await newUser.save();
        res.redirect('/adminPanel');
    } catch (error) {
        console.error('Error creating user:', error);
        res.render('admin-panel', { error: 'Failed to create user' });
    }
};

const deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.redirect('/adminPanel');
    } catch (error) {
        console.error('Error fetching users:', error)
        res.redirect('/adminPanel');
    }
};

const editUser = async (req, res) => {
    try {
        const { username, email } = req.body; 
        await User.findByIdAndUpdate(req.params.id, { username, email });
        res.redirect('/adminPanel'); 
    } catch (error) {
        console.error('Error updating user:', error);
        res.redirect('/adminPanel');
    }
};


module.exports= { adminSignup , fetchUsers , createUser , deleteUser ,editUser } 