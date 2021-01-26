const fs = require('fs');

// http get request
const GetMethod = (req,res)=>{
    res.send('Homepagex')
}

const PostController = (req,res)=>{
    console.log(req.body)
    fs.appendFileSync('output.json',JSON.stringify(req.body));
    res.json({
        message:req.body
    })
}


const UpdateController = (req,res)=>{
    console.log(req.body)
    res.json({
        message:req.body
    })
}

const DeleteController = (req,res)=>{
    console.log(req.body)
    res.json({
        message:'Success!!'
    })
}


module.exports ={GetMethod,PostController,UpdateController,DeleteController}