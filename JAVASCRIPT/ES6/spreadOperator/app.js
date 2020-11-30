// spread operator

// example1
const simpleArray = [1,2,3,4,5,6,7,8,9];
console.log(...simpleArray)

console.log(Math.max(...simpleArray))

// example 2
const book1 = {
    name: 'Ecce Homo',
    author:'Friedrich Nietzsche'
}

const details ={
    price:"20EUR",
    stock:10
}

const combined = {
    ...book1,
    ...details
}

console.log(combined)

const rest = [6,7,8,9]

const numbers = [1,2,3,4,5,rest[0],rest[1],rest[2],rest[3]]

const newNumbers = [1,2,3,4,5,...rest]

console.log(newNumbers)
console.log(numbers)





// sum arrowfunction
const printIt = (a,b)=> a+b;

// array
const args = [10,20]

// print
console.log(printIt(...args))

