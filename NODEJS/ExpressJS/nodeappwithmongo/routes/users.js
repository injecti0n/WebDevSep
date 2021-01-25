var express = require('express');
var router = express.Router();
const checkToken = require('../middlewares/checkToken')
const {getUsers,addUser,getUserById,updateUserById,deleteUserById,authController,loginController} = require('./controllers/userController')

/* GET users listing. */
router.get('/',checkToken,getUsers);

// post routers
router.post('/',addUser)

router.get('/:id',checkToken,getUserById)

// update user
router.put('/:id',checkToken,updateUserById)

// delete user
router.delete('/:id',checkToken,deleteUserById)

// login auth
router.get('/auth/login',authController)

router.post('/auth/login',loginController)

module.exports = router;
