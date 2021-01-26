// import HTTP module
const http = require('http')
const users = require('./modules/users')
// create Server here

http.createServer(function(req,res){
    // res.write('Welcome to my page / intecbrussel') // data we printed in the page
    res.writeHead(200,{'Content-Type':"text/plain"})
    users().then(response=>{
        res.write(JSON.stringify(response))
        res.end()
    })

}).listen(5000,function(){
    console.log('Server is running on 5000 port')
})


