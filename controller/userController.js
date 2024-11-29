const User= require('../model/user')

const signup=  async (req,res) => {
    const {username,password,email}= req.body;
    try{
        const user= new User ({username,password,email});
        await user.save()
        res.redirect('/user')
    }catch(error){
        res.render('/signup',{error: 'Invalid credentials'})
    }
}

const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username, password });
        if (user) {
            req.session.username = user.username;
            res.redirect('/home');
        } else {
            res.render('login', { error: 'Invalid credentials' });
        }
    } catch (error) {
        console.error('Error during user login:', error);
        res.render('login', { error: 'Something went wrong' });
    }
};


module.exports = { signup, login };