// homepage
const homeController = (req,res)=>{
    res.send('Homepage')
}

// api
const apiController = (req,res)=>{
    res.json({
        id:1
    })
}

module.exports = {homeController,apiController}