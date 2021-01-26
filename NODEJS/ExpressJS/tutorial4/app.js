const express = require('express')
const app = express();
const bodyParser =  require('body-parser')
const {HomeController,BlogController} = require('./controller/HomeController')
const {getUsers,singleUser} = require('./controller/UsersController')
const path = require('path')
// app.use(bodyParser({
//     extended:false
// }))

app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

app.get('/',HomeController)
app.get('/blog',BlogController)
app.get('/users',getUsers)
app.get('/users/:id',singleUser)

app.listen(3009,()=>{
    console.log('Server is running!')
})