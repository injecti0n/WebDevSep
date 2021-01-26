// Object COnstructors

// const student1 = {
//     name:"Jack",
//     job:"Developer",
//     getStudent:function(){
//         console.log(`Name:${this.name}\nJob:${this.job}`)
//     }
// }

// const student2 = {
//     name:"Michael",
//     job:"Superman",
//     getStudent:function(){
//         console.log(`Name:${this.name}\nJob:${this.job}`)
//     }
// }

// student1.getStudent()
// function constructor
function People(fullName,JobDetail){
    this.name = fullName;
    this.job = JobDetail;
    this.testFunc = function(){
        console.log('This is a function from constructor')
    }
    this.data = {profession:"Superman"}
    this.users = ['ali','veli','deli'];

}

let student1 = new People('Mike','Programmer')
let student2 = new People('Michael','Driver')
console.log(student1) // object by function constructor
console.log(typeof student1)
console.log(typeof People)
console.log(student2)

// Prototypes
// let student=  {
//     name:"empty"
// }

// student.testFunction = function(){
//     console.log('hello student')
// }


// console.log(student,"test obj")

People.prototype.getInfo = function(){
    console.log(`Name:${this.name}\nJob:${this.job}`)
}

People.prototype.addPerson = function(name,job){
    console.log(`Name:${name}\nJob:${job}`)
}

student1.getInfo();
student2.getInfo();
student1.addPerson('Marilyn','Musician');
student1.testFunc()
console.log(student1.users)
console.log(student1.data)

