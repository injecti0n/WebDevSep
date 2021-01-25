const jwt = require('jsonwebtoken');

const auth = (req,res,next)=>{
    try {
      console.log(req.headers.authorization.split(' ')[1])
      const token = req.headers.authorization.split(' ')[1]
      jwt.verify(token,'YDRwNx6J8Baymk8cgrxs6xLE7ne9n2xF2cBJ3NGSWd')
      console.log(jwt.verify(token,'YDRwNx6J8Baymk8cgrxs6xLE7ne9n2xF2cBJ3NGSWd'))
      next()
    } catch (error) {
      res.status(401).json({
        message:'no token provided or invalid/expired token',
        err:error
      })
    }
  }



module.exports = auth