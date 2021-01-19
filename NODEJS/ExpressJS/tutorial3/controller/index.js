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

const UserController = (req,res)=>{
    let username = req.query.username
    console.log(username)
    console.log('works')
    console.log(req.body)
    res.send(`Welcome ${username}`)
}

const singleUserController = (req,res)=>{
    let userID = req.params.userid
    console.log(userID)
    res.send('Single User Profile section')
}

const postController = (req,res)=>{
    console.log(req.params)
    res.send('Post Section')
}

module.exports = {homepageController,loginController,registerController,apiController,UserController,singleUserController,postController}