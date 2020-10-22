// Operators

/*

==	equal to
===	equal value and equal type
!=	not equal
!==	not equal value or not equal type
>	greater than
<	less than
>=	greater than or equal to
<=	less than or equal to
?	ternary operator

*/

var number1 = 5;
var number2 = "5";

var result = number1 === number2; // false

var jack = 16;

// if(jack == 20){
//     console.log('Yes, he is a young boy.')
// }else{
//     console.log('No, he is not!')
// }


result = jack != 25; 


var string1 = "intec", string2="brussel";

result = string1 !== string2;

result = jack > 25; // true
result = jack > 30; // false, jack is 26 years old.

result = jack < 30; // true
result = jack < 16; // false

result = jack >= 26; // true
result = jack >= 28; // false


let myNumber = 10;

myNumber++;
console.log(myNumber) // 11
++myNumber;
console.log(myNumber) // 12
--myNumber;
console.log(myNumber) // 11
myNumber--;
console.log(myNumber) // 10

console.log(result);

// ternary operator

// variablename = (condition) ? value1:value2

result = (jack<18) ? 'He is a kid':'He is a young boy';
console.log(result)
/*
(jack<18) > condition
? > end of condition
first return when condition return true
second return when condition return false
*/



var productStock = 0;
var alert="Out of stock",success="Still available";
var cart = (productStock < 1) ? alert:success;
console.log(cart)


// student lowest score: 50
