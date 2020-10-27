// functions


// function syntax
function myFunctionName(){
    console.log('before return: function message') 
    return 'this is my first function'
    
}

console.log(myFunctionName()); // invoked

function calculateIt(a,b){
    console.log(a,b)
    return a+b;
}

// calculateIt(5,"Jack");

let sumResult = calculateIt(5,6);
console.log(sumResult);

// var var1 = 5
// var var2 = 6;
// var result = 5+6;
// console.log(result);

function getUser(userObj){
    return userObj.firstname;   
}

let student = {
    firstname:'Jack',
    lastname:'Sparrow'
}

let showUserName = getUser("asdasdasdasd"); 

console.log("GetUserFunction says:",showUserName)

// CTRL + K + C > comment it
// CTRL + K + U > uncomment it


let autoDrive= {

    forward:function(){console.log('FOrward ')},
    backward: function(){console.log('Backward')},
    turnLeft: function(){console.log('Turn left!')},
    turnRight: function(){console.log('Turn Right!')}

}

autoDrive.turnLeft();
autoDrive.backward();
autoDrive.turnRight();
autoDrive.forward();

// local variables
// let localVarible = 'This is not local variable';
function printService(){
    let localVarible = 'This is a local variable'; // can access only in function
    console.log(localVarible);
    
}

printService();

// console.log(localVarible)

// global variable

let GlobalVariable = 'This is a global variable';

function COnsoleService(){
    console.log(GlobalVariable)
}

COnsoleService();


function Intecbrussel(firstname,lastname,age,email,password){

    console.log(firstname,lastname,age,email,password)

}

Intecbrussel('Jack','Sparrow',25,'root@root.com','3429u4482834sjadd');








// object
let personal = {
    firstname:'jack',
    lastname:'Sparrow'
}
let teacher = {
    firstname:'Mikail'
}

function testFunction(myParameterName){

    // let myParameterName = personal;
    console.log(myParameterName.firstname)
    console.log(myParameterName.lastname)

}


testFunction(personal);