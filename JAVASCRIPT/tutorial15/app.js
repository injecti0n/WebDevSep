// Math Object

var result;

// PI number
result = Math.PI

// Round() method

result = Math.round(9.3) // 9
result = Math.round(9.6) // 10

// Power method()
result = Math.pow(8,2)

// Square root method

result = Math.sqrt(64)

// Absolute positive value {abs}
result = Math.abs(-9.5)

// Sin and Cos
/*
math:sin(90 * math:pi() / 180).
*/

result = Math.sin(90 * Math.PI / 180);
result = Math.cos(0 * Math.PI / 180);

// Max and Min methods

// max

result = Math.max(33,44,22,55,66,554,43);

// min
result = Math.min(99,88,77,66,55,1)

let numbers = [22,33,44,55,66,77,88]

result = Math.min(...numbers);

// Generate random numbers

result = Math.round(Math.random()*100)+1;

function RandomNumberGenerator(min,max){
    console.log("math",(max - min + 1)+min)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let generator = RandomNumberGenerator(15,20);
console.log(generator,"test")


// Date Object
result = new Date();

// getFullYear()
result = new Date()
// result = result.getFullYear();
var fullYear = result.getFullYear();
console.log(fullYear)

// getCurrentMonth
result = result.getMonth();

// toLocaleString
result = new Date();
let opt = {weekday:'short',year:'numeric',month:'long',day:'numeric',}
result = result.toLocaleString('nl-BE',opt);
result = new Date();

// seconds,minutes,hours

result = result.getSeconds();
result = new Date().getMinutes();
result = new Date().getHours();
result = new Date();
result = `${result.getHours()}:${result.getMinutes()}:${result.getSeconds()}`

let nl_days = ['Zondag','Maandag','Dinsdag','Woensdag','Vrijdag','Zaterdag'];
console.log(nl_days)
result = nl_days[new Date().getDay()];

console.log(result)

