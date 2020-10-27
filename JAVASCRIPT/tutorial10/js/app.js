// let askuser = prompt('Are you admin?','no');
// let username = prompt('What is your username?','default');
// let askAge = confirm('are you under age 17',17);
// console.log(askAge)
// console.log(askuser);
// console.log(username);


// if statement
let user = 'admin';
if( user == 'user' ){
    console.log('welcome to admin dashboard')
}else{
    console.log('welcome to user dashboard')
}

//let username = prompt('enter your username','default');

// if(username == 'admin'){
//     alert('welcome admin!')
// }else{
//     alert('welcome user!')
// }

var totalProduct= 0;

if(totalProduct <=0){
    totalProduct++;
    console.log("TotalProduct=> ",totalProduct)
}

let jack = 10;
let michail = 80;
if(michail>jack){
    console.log(michail>jack)
    console.log("Michail's age is greater than Jack")
}else{
    console.log(michail>jack)
    console.log("Jack's age is greater than Michail")
}
// counter
let count =0;
function increment(){
    count++
    console.log(count)
}

function decrement(){
    if(count <=0){
        console.log(count)
    }else{
        count--;
        console.log(count)
    }
}
// end of counter