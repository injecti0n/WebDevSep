const HomeController = (req,res)=>{
    res.render('index',{
        name:'jack'
    })
}

const userArray =  [
    {id:1,name:'atilla'},
    {id:2,name:'mikail'}
]

const BlogController = (req,res)=>{
    res.render('blog',{userArray:userArray})
}

module.exports={HomeController,BlogController}