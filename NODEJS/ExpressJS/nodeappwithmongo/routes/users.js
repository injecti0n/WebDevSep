var express = require('express');
var router = express.Router();
const User = require('../models/User')

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find({},(err,response)=>{
    if(err){
      res.json(err)
    }else{
      res.json(response)
    }
  })
});


// post routers
router.post('/user',(req,res)=>{
  const newUser = new User({
    username:req.body.username,
    password:req.body.password
  })

  newUser.save()
  .then(response=>{
    res.json({
      message:'OK',
      data:response
    })
  }).catch(err=>{
    res.json(err)
  })
  // res.json({
  //   id:1
  // })
})



module.exports = router;
