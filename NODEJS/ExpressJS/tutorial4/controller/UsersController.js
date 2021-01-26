const fetch = require('node-fetch')
const apiURL = 'https://jsonplaceholder.typicode.com/users'

const getUsers = (req,res)=>{
    fetch(apiURL)
    .then(response=>response.json())
    .then(last=>{
        console.log(last)
        res.render('users',{last:last})
    })

}

const singleUser = (req,res)=>{
    let userID = req.params.id
    fetch(apiURL+`/${userID}`)
    .then(response=>response.json())
    .then(last=>{
        res.render('singleuser',{last:last})
    })
    console.log(apiURL+`/${userID}`)
  //  res.render('singleuser')
}

module.exports = {getUsers,singleUser}