const Imagekit=require ("@imagekit/nodejs")





const imagekit=new Imagekit({
    privateKey:"private_l5TvtuSSubGUUPogqXcg9bkrlFE="
})
async function uploadfile(buffer) {
    

   const result= await imagekit.files.upload({
        file:buffer.toString("base64"),
        fileName: "image.jpg"
    })
    return result
}

module.exports=uploadfile
