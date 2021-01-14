const http = require('http');


let users = [
    {
        id:1,
        username:'Jack'
    },
    {
        id:2,
        username:'George'
    }
]

function adminPage(obj){
    return `<p>${obj.username}</p>`
}

http.createServer((request,response)=>{
    console.log(request.url)
    //response.write('homepage')
    if(request.url === '/admin'){
        users.forEach(user=>response.write(adminPage(user)))
        //response.write('This is admin')

    }else if(request.url === '/login'){
        response.write('This is login')
    }else if(request.url === '/api'){
        response.write('This is rest-api url')
    }

    // response.write('hello')
    response.end();
}).listen(3001,()=>{
    console.log('Server is running.')
})