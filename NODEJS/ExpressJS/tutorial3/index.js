const express = require('express')
const app = express();
const {homepageController,loginController} = require('./controller/index')

// npm install nodemon -g
// macOS and Linux; sudo npm install nodemon -g


function loginCheck(req,res,next){
    let isLogged = false;
    if(!isLogged) {
        console.log('Middleware is runnig and isLogged=true')
        next()
    }
}

// app.use(loginCheck) // application level middleware


app.get('/',homepageController); 
app.get('/login',loginCheck,loginController); // Router level middleware



app.listen(3002,()=>{
    console.log('Server is running...')
})