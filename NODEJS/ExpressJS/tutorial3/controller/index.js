const homepageController = (req,res)=>{
    res.send('Homepage!')
}

const loginController = (req,res)=>{
    res.send('Login section')
}

module.exports = {homepageController,loginController}