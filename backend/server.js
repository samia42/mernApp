const express = require("express")
const dotenv = require("dotenv").config()
const port = process.env.PORT || 5000;

const app = express();

app.get("/apis/goals",(req,res)=>{
    res.status(200).json({message:"its goals"})
})

app.listen(port , ()=>{
    console.log(`server running at port ${port}`)   
})
