const User = require('../../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

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


const deleteUserById = (req, res) => {
    let userID = req.params.id
    User.findByIdAndDelete({ _id: userID }, (err, response) => {
        if (err) {
            res.json({
                err: err
            })
        } else {
            res.json({
                message: 'deleted!!!!',
                data: response
            })
        }
    })
}

// auth page
const authController = (req, res) => {
    res.send('auth page')
}

const loginController = (req, res) => {
    let getUser;
    User.findOne({
        username: req.body.username
    }).then(user => {
        if (!user) {
            return res.status(401).json({
                message: 'Auth fail!'
            })
        }
        getUser = user;
        return bcrypt.compare(req.body.password, user.password) // bcrypt compared plaintext pass and protected(crypted pass)
    }).then(response => {
        if (!response) {
            return res.status(401).json({
                message: 'Auth fail!'
            })
        }
        if (getUser !== null && getUser !== undefined) { // if user record exist generate token and print them in response.
            let token = jwt.sign({
                username: getUser.username,
                userId: getUser._id
            }, 'YDRwNx6J8Baymk8cgrxs6xLE7ne9n2xF2cBJ3NGSWd', {
                expiresIn: '1h'
            });
            res.status(200).json({
                token: token,
                expiresIn: 3600,
                _id: getUser._id
            })
        }
    })
}

module.exports = { getUsers, getUserById, addUser, updateUserById, deleteUserById, authController, loginController }