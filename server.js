const express = require('express');
const mongoose = require('mongoose');
const server = express();

server.use(express.json());
server.use(express.urlencoded({
    extended:true
}))
mongoose.connect('mongodb://localhost/27017');
server.use('/',require('./routes/post'))
server.get('/',(req,res,next)=>{
    res.send("working")
})

server.listen(1221,()=>{
    console.log('http://localhost:1221');
})