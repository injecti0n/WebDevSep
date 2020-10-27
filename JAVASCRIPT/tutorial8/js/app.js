/*

findbiggestnumber(10,20);
expected output. 20 is bigger than 10.


*/


function findBiggestNumber(a,b){
    return a>b? `${a} is greater than ${b}`:`${b} is greater than ${a}`
}

let _result = findBiggestNumber(24,120);
console.log(_result)



// selectors
var number1 = document.getElementById('number1');
var number2 = document.getElementById('number2');
var result  = document.getElementById('result');


function calc(){
    //console.log(Number(number1.value) + Number(number2.value))
    return result.innerText=`RESULT=> ${Number(number1.value) + Number(number2.value)}`
}