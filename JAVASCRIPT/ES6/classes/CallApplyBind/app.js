/*

- Call invokes the function immediately and allows you to pass in arguments one by one
- Apply invokes the function immediately and allows you to pass in arguments as an array.
- Bind returns a new function, and you can invoke/call it anytime you want by invoking a function.

*/

// Bind

const info = {
    firstname:"Jack",
    lastname:"Goerge"
}

const extraInfo = {
    age:"25"
}

const makeitOne = {
    ...info,
    ...extraInfo
}

function PrintService(){
    console.log(`${this.firstname} ${this.lastname}\nAge:${this.age}`)
}


const cloneofFunction = PrintService.bind(makeitOne);
//const cloneSecond = PrintService.bind(extraInfo);

cloneofFunction()
//console.log(cloneofFunction) // function
//cloneofFunction();


// Apply

const newCalc = {
    myFunc:function(a,b){
        return a+b
    }
}

const response = newCalc.myFunc.apply("",[6,7])
console.log(response)

const StudentManagement = {
    addUser:function(name,age,city,email){
        let response = `${this.name}\n${this.age}\n${this.city}\n${this.email}\n${this.extrainfo}`
        console.log(response)
    }
}

let st1 =  {
    name:"Jack",
    age:25,
    city:"Brussel",
    email:"jack@00.com"
}

let AddUserResponse = StudentManagement.addUser.apply(st1)
console.log(AddUserResponse)


// call 
function canonPrinter(){
    console.log(this.name,this.age)
}

let data = {
    name:"name pro",
    age:25
}

let printerTest = canonPrinter.call({
    name:"ali",
    age:30
})

console.log('printer service',printerTest)

