const mongoose = require('mongoose');

exports.getHomePage = (req, res) => {
    res.render('home');
};