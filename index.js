import express from 'express'
import zod, { string } from 'zod'
const app=express()

// app.get('/',function(req,res,next){
//     console.log("first function")
//     res.send("hello word")
//     next()
// },function(req,res) {
//     console.log("seond funtion is called")
//     res.send("second functuions")
// })


const mySchma=zod.object({
    username: zod.string().min(3).max(5),
    password: zod.string(),
    country: zod.literal("IN").or.literal("US"),
    kindyArr: zod.array(zod.number())
})


app.use(express.json())
app.post('/zod',function(req,res){
    const {username,password}=req.body
    const resposne=mySchma.safeParse({username,password})
    if(!resposne.success){
        res.status(411).json({
            message: resposne
        })
    }else{
        res.send(resposne)
    }
})
app.listen(3000)