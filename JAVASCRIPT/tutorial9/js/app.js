// keeper


function keeper1(param){
    return Number(param);
}

function keeper2(param){
    return Number(param) + 3;
}

function keeper3(param){
    return Number(param)+10;
}

function keeper4(param){
    return `This is the last process ${param++}`
}

// keeper1(1) > keeper2(keeper1(1)) > keeper3(keeper2(keeper1(1))) > keeper4(keeper3(keeper2(keeper1(1))));

// data flow

let result = keeper4(keeper3(keeper2(keeper1(1))));
console.log(result)
// 1+3+10 = 14


// data flow javascript

let student = {}
function str1(param){
    return param;
}

function str2(param){
    param.firstname='Jack';
    return param;
}

function str3(param){
    param.lastname="Sparrow";
    return param;
}

function str4(param){
    return param;
}

var result1 = str1(student);
var result2 = str2(result1)
var result3 = str3(result2)
var printService = str4(result3);

console.log(printService)


// 3 function

// function1 init object
// function2 add properties (fullname,age,email)
// function3 printerService print info in this function.

// function3 collapse function2 collapse function
// function3>function2>function1 > result

