var express = require('express');
var router = express.Router();

const {getUsers,addUser,getUserById,updateUserById,deleteUserById} = require('./controllers/userController')


/* GET users listing. */
router.get('/', getUsers);

// post routers
router.post('/',addUser)


router.get('/:id',getUserById)


// update user
router.put('/:id',updateUserById)

// delete user
router.delete('/:id',deleteUserById)


module.exports = router;
