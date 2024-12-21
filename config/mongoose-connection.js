const mongoose = require('mongoose');
const dbgr = require("debug")("development:mongoose");
const debug = require('debug');
debug.enable('development:*');


mongoose
.connect('mongodb://127.0.0.1:27017/scatch')
.then(function(){
    debug("connected");
})
.catch(function(err){
    debug(err);
})

module.exports = mongoose.connection;