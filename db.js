const mongoose = require("mongoose");

var mongoURL ='mongodb+srv://hassam_rana123:zali2430@cluster0.2ob6grg.mongodb.net/Rate-UP';

mongoose.connect(mongoURL,{useUnifiedTopology:true,useNewUrlParser:true});

var connection = mongoose.connection;


connection.on('error',()=>{
    console.log('Mongo DB connection failed')
});

connection.on('connected',()=>{
    console.log('Mongo DB Connection Successful')
});

module.exports = mongoose;