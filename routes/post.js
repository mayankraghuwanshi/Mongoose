const route = require('express').Router();
const mongoose = require('mongoose');
const Post = require('../models/post');
route.get('/post',(req , res )=>{
    Post.find({}).then((data)=>{
        res.send(data)
    })
})
route.post('/post',(req , res )=>{
    const post = new Post({
     title: req.body.title,
        image: req.body.image,
        content: req.body.content,
        user: req.body.user
    })
    post.save().then(()=>{
        console.log('sucessfully added to database')
        res.redirect('./post')
    }).catch((err)=>{
        console.error({error:err})
        res.send({error:err})
    })
})






module.exports= route;