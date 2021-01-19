const homepageController = (req,res)=>{
    res.send('Homepage!')
}

const loginController = (req,res)=>{
    res.send('Login section')
}

const registerController = (req,res)=>{
   // console.log(req.body)
    res.send('REgister Section')
}

const apiController = (req,res)=>{
    res.json({
        id:1,
        title:"Lorem ipsum"
    })
}

module.exports = {homepageController,loginController,registerController,apiController}