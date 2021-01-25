var express = require('express');
var router = express.Router();

const {getUsers,addUser,getUserById,updateUserById,deleteUserById,authController,loginController} = require('./controllers/userController')


/* GET users listing. */
router.get('/', getUsers);

// post routers
router.post('/',addUser)

router.get('/:id',getUserById)


// update user
router.put('/:id',updateUserById)

// delete user
router.delete('/:id',deleteUserById)

// login auth
router.get('/auth/login',authController)

router.post('/auth/login',loginController)

module.exports = router;
