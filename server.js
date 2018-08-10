const express = require('express');
const server = express();
server.get('/',(req,res,next)=>{
    res.send("working")
})
server.listen(1221,()=>{
    console.log('http://localhost:1221');
})