const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/secretDB', {useNewUrlParser:true, useUnifiedTopology:true});
mongoose.set('useCreateIndex', true);

require("./user");