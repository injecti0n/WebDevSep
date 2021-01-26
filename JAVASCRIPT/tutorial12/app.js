/*

toString(); The toString() method returns a number as a string.
Number();
parseInt();
parseFloat()

*/

let myNumber = 10;
console.log(typeof myNumber)
let typeOfVariable = myNumber.toString();
console.log(typeOfVariable)
console.log(typeof typeOfVariable)

let sum = "5" / "5";
console.log(sum)

let salaryPerMonth = 12.948
// salaryPerMonth = salaryPerMonth.toExponential(4) // returns a string, with a number rounded and written using exponential notation.
salaryPerMonth = salaryPerMonth.toFixed(1) // returns a string, with the number written with a specified number of decimals
console.log(salaryPerMonth);


var myNumberVar = "1354" // string data type

var showinConsole = parseInt(myNumberVar);


showinConsole = Number.isFinite("5");
showinConsole = Number.isInteger(5);


function fixedTheSalary(salary) {
    return `Salary> ${Number.parseFloat(salary).toFixed(2)}`
}


let result = fixedTheSalary('2.3432')
console.log(result)


console.log(showinConsole, typeof showinConsole)



