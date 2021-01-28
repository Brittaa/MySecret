const mongoose = require('mongoose');
const passport= require('passport');

const User = mongoose.model("User");

exports.getLoginPage = (req, res) => {
    res.render('login');
};

exports.logUserIn = (req, res) => {
    const user = new User ({
        username: req.body.username,
        password: req.body.password
    });

    req.login(user, (error) =>{
        if (error){
            console.log(error);
        } else {
            passport.authenticate("local") (req, res, ()=> {
                res.redirect('/secrets');
            });
        }
    });
};

exports.logUserOut = (req, res) => {
    req.logout();
    res.redirect('/');
};