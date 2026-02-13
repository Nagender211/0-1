import express from 'express'

const app=express()

app.get('/',function(req,res,next){
    console.log("first function")
    res.send("hello word")
    next()
},function(req,res) {
    console.log("seond funtion is called")
    res.send("second functuions")
})

app.listen(3000)