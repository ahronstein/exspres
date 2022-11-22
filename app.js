const express = require ('express')
const { listen } = require('express/lib/application')
const app = express()

app.get('/',(req,res)=>{
    res.send('<h1>hello</h1')
})
app.get('/users/:userID',(req,res)=>{
    const userID = req.params.userID
    res.send('<h1>hellor6u</h1')
})
app.get(`/users`,(req,res)=>{
    const userID = req.params.userID
    res.send('<h1>hellor6u</h1')
})
app.get('/users/new',(req,res)=>{
    res.send('user '+userID)
})


app.listen(3006,()=>{console.log('listen to port 3006');})
