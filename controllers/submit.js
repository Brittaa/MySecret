  
const mongoose = require('mongoose');
const User = mongoose.model("User");

exports.getSubmit = (req, res) =>{
    if(req.isAuthenticated()){
        res.render('submit');
    } else {
        res.redirect('/login');
    }
};

exports.postSubmit = (req, res) =>{
    console.log("submit");
    const submittedSecret = req.body.secret;
    
    User.findById(req.user.id, (error, userFound) => {
        if(error){
            console.log(error);
        } else {
            userFound.secret = submittedSecret;
            userFound.save(() => {
                res.redirect('/secrets');
            });
        }
    })
};