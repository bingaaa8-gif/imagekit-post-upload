const mongoose=require ("mongoose")


const imageschema=new mongoose.Schema({
    image:String,
    caption: String,
})
const imageModel=mongoose.model("images",imageschema)
module.exports=imageModel