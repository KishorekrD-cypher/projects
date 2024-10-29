const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');

const app = express();
const PORT = 3000;

app.use(express.json());

const mongoURI = 'mongodb+srv://kishorekrdeloitte:Kishore005**@cluster0.qnscg.mongodb.net/';

mongoose.connect(mongoURI)
    .then(()=> console.log('Mongodb connected...'))
    .catch(err=> console.log(err))

app.get('/', (req,res)=>{
    res.send("Connected to Mongodb");
});

app.get('/api/users',async (req,res)=>{
    try{
        const users = await User.find();
        res.json(users);
    } catch(err){
        res.status(500).send(err);
    }
});

app.post('/api/users', async (req,res)=>{
    try{
        const userData = req.body;
        const user = await User.create(userData);
        res.status(201).json(user); 
    } catch(err){
        res.status(500).send(err);
    }
})

app.listen(PORT,()=>{
    console.log(`Server started on ${PORT}`);
})