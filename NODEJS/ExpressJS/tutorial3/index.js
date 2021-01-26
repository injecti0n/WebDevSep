const express = require('express')
const app = express();
const { homepageController, loginController, registerController, apiController, UserController, singleUserController, postController } = require('./controller/index')
const bodyParser = require('body-parser')
let apiToken = '123456'
// npm install nodemon -g
// macOS and Linux; sudo npm install nodemon -g

app.use(bodyParser({
    extended: true
}))

function loginCheck(req, res, next) {
    let isLogged = false;
    if (!isLogged) {
        console.log('Middleware is runnig and isLogged=true')
        next()
    }
}

function captureData(req, res, next) {
    console.log(req.body)
    next()
}

function CheckToken(req, res, next) {
    let token = req.headers.token
    console.log(token)
    if (token != apiToken) {
        res.status(500).send('invalid token')
    }
    next()
}


// app.use(loginCheck) // application level middleware

app.get('/', homepageController);
app.get('/login', loginCheck, loginController); // Router level middleware
app.post('/register', captureData, registerController)
app.get('/api', CheckToken, apiController)
app.all('/user', UserController) // all http requests (get,post,put,delete)
app.get('/user/:userid', singleUserController)

app.get(/post-(.*)/,postController)

// https://stackabuse.com/?page=2&limit=3



app.listen(3002, () => {
    console.log('Server is running...')
})