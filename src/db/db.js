const mongoose=require ("mongoose")
  

async function connectDb(){
   await  mongoose.connect("mongodb+srv://bingaaa8_db_user:bHXJkv3N4pcDDGQi@cluster0.wpgrmn2.mongodb.net/image")
   console.log("data base connected ")
}

module.exports=connectDb