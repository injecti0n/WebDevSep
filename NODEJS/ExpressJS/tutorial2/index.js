// HTTP REQUEST

const express = require('express')
const app = express();
const {GetMethod,PostController,UpdateController,DeleteController} = require('./controller/index')
const bodyParser = require('body-parser')

app.use(bodyParser())

// get method
app.get('/',GetMethod)

// post method
app.post('/',PostController)

// update
app.put('/',UpdateController);

// delete
app.delete('/delete',DeleteController)


app.listen(3002,()=>console.log('Server is running...'))