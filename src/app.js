const express = require ("express");
const multer =require ("multer")
const imageModel=require ("../src/models/user.models")
const uploadfile=require ("./services/storage.service")
const cors=require ("cors")

const app=express();
app.use(cors())
app.use(express.json())

const upload = multer({
    storage:multer.memoryStorage()
})

app.post("/create", upload.single("image"),async(req,res)=>{
    console.log(req.body)
    console.log(req.file)
    const result=await uploadfile(req.file.buffer)
    const post=await imageModel.create({
        image: result.url,
        caption:req.body.caption
    })
    return res.status(201).json({
        message:"post created succesfully",
        post
    })
})
app.get("/post",async(req,res)=>{

    const postt=await imageModel.find()
   return res.status(200).json({
        message:"post feteched succesfullly",
        postt
    })
})



module.exports=app