var express = require('express');
var router = express.Router();

const {getUsers,addUser} = require('./controllers/userController')


/* GET users listing. */
router.get('/', getUsers);

// post routers
router.post('/',addUser)




module.exports = router;
