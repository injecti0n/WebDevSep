function getUser(username,password){
    let user_bool = (username=='admin')? true:false;
    let pass_bool = (password=='123456')? true:false;
    console.log('username result>',user_bool)
    console.log('password result>',pass_bool)

    let user={
        isUserAdmin:user_bool,
        isPasswordValid:pass_bool
    }

    return user;
    
}

let result = getUser('admin','123456');

if(result.isUserAdmin == false || result.isPasswordValid == false){
    console.log('Username or password incorrect')
}else{
    console.log('welcome admin! username and password are correct!')
}

console.log(result)