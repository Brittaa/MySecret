const mongoose = require('mongoose');
const User = mongoose.model("User");


exports.getSecrets = (req, res) => {
    if(req.isAuthenticated()){
        User.find({"secret": {$ne: null}}, (error, userFound) => {
            if (error){
                console.log(error);
            } else {
                console.log(req.user);
                res.render('secrets', {usersSecrets: userFound});
            }
        });

    } else{
        res.redirect('/login');
    }
}; 