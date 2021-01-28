const mongoose = require('mongoose');
const passportlocalMongoose= require ('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    email: String,
    password: String, 
    secret: String
});

userSchema.plugin(passportlocalMongoose);

mongoose.model('User', userSchema);