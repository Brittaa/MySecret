require('dotenv').config(); 
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const md5 = require('md5');
const session = require('express-session');
const passport = require('passport');
//const passportlocalMongoose = require('passport-local-mongoose');

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
//initialize session

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}));

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

require("./models/db");

//const secret = 'thisismysupersecretkey';
//userSchema.plugin(encrypt, {secret: process.env.SECRET, encryptedFields: ['password']});

const User = mongoose.model('User');
passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Routes
const home = require("./routes/home");
const login = require("./routes/login");
const register = require("./routes/register");
const secret = require("./routes/secret");

app.use(home);
app.use(login);
app.use(register);
app.use(secret);

app.listen(3000, () =>{
    console.log('Server is running on port 3000');
})
