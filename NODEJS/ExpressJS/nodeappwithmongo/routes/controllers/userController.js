const User = require('../../models/User')
const bcrypt = require('bcrypt')

// USER CONTROLLER

// get users controller
const getUsers = (req, res) => {
    User.find({}, (err, response) => {
        if (err) {
            res.json(err)
        } else {
            res.json(response)
        }
    })
}

// get user by id

const getUserById = (req, res) => {
    let userID = req.params.id
    User.findById(userID, (err, response) => {
        if (err) {
            res.json({
                err: err
            })
        } else {
            res.json({
                message: 'OK',
                data: response
            })
        }
    })
}



// post new user controller
const addUser = (req, res) => {
    bcrypt.hash(req.body.password, 10)
        .then(protected_password => {
            const newUser = new User({
                username: req.body.username,
                password: protected_password
            })
            newUser.save()
                .then(response => {
                    res.json({
                        message: 'OK',
                        data: response
                    })
                }).catch(err => {
                    res.json(err)
                })
        })

}


const updateUserById = (req, res) => {
    let userID = req.params.id
    User.findOneAndUpdate({ _id: userID }, req.body, (err, response) => {
        if (err) {
            res.json({ err: err })
        } else {
            res.json({
                message: "ok",
                data: response
            })
        }
    })

}


const deleteUserById = (req,res)=>{
    let userID = req.params.id
    User.findByIdAndDelete({_id:userID},(err,response)=>{
        if(err){
            res.json({
                err:err
            })
        }else{
            res.json({
                message:'deleted!!!!',
                data:response
            })
        }
    })
}

module.exports = { getUsers, getUserById, addUser, updateUserById,deleteUserById }