const express=require('express');
const userRouter = require('./routing/userRouter');

const app=express();
// const bodyParser=require("body-parser")
// app.use(bodyParser())
app.use(express.json())
app.use("/api",userRouter)
app.get("/",(req,res)=>{
// res.send("Vimal")
})
app.listen(4000,() =>{
    console.log("server is running");
});