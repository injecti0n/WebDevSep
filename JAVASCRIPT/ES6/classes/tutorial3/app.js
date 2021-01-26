// func constructor

// function Math(x,y){

//}






// es5
function Member() {
    this.members = [];
   

}

/*
    let tempObj = {
        user:username,
        pass:password,
        email:email
    }

    this.members.push(tempObj)
__proto__ = {}
__proto__.addMethod=function 
*/


// Add Member
Member.prototype.addMember = function(username,password,email){
    let tempObj = {
        user:username,
        pass:password,
        email:email
    }
    this.members.push(tempObj)
    console.log(tempObj)
}

let subscribe1= new Member()
//console.log(subscribe1)

subscribe1.addMember('Root','123123','root@root.com');



