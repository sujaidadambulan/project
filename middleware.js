const isAdminAuthenticated = (req, res, next) => {
    if (req.session.admin) {
        next();
    } else {
        res.redirect('/admin');
    }
};

const isUserAuthenticated = (req, res, next) => {
    if (req.session.username) {
        next();
    } else {
        res.redirect('/user');
    }
};

module.exports={isAdminAuthenticated, isUserAuthenticated}