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

module.exports = { getUsers, addUser }