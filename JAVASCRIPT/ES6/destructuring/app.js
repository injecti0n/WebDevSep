let numbers =[1,2,3,4,5,6]

const [x,y,z,a,b,c] = numbers; // extracted value from array {new method}

console.log(x)
console.log(a,b,c)

let _x = numbers[0] // extracted value from array {old method}
console.log(_x) 
console.log(x)

let students = ['Student1','Student2','Student3'];
// start
let [s1,s2,s3]= students;
// let s1 = students[0]
// let s2 = students[1]
// let s3 = students[2]
// end 
console.log(typeof s1)
console.log(s1)

// destructuring with nested arrays

let nestedArray = ['Book1','Book2','Book3',['Book4','Book5','Book6']]
console.log(nestedArray)
let [b1,b2,b3,[b4,b5,b6]] = nestedArray;
console.log(b1)
console.log(b4)

// obj

// let StudentInfo = {
//     name:"Mr.Mud",
//     profession:'Developer',
//     location: {
//         city:'Aalst',
//         country:'Belgium'
//     }
// }

// console.log(StudentInfo)

// let {
//     name,
//     profession,
//     location:{city,country}
// } = StudentInfo;

// console.log(country)

// console.log(name,profession)

const people = {
    name:"Jack",
    job:"Student",
    age:25,
    showPeople: function(){
        console.log("hello it's from showPeople")
    }
}

// const {name,job,age,showPeople} = people
const {name:naam,job:job,age:oud,showPeople:toonPersonen} = people
//console.log(name,job,age)
// showPeople()

toonPersonen()

const obj1 = {
    a:10,
    b:20,
    c:40,
    d:50
};

const {a:letter1,b:letter2,c:letter3,d:letter4} = obj1;

console.log(letter1)


// mission

const metaInfo = {
    title:'INTECBRUSSEL',
    courses:{
        javascript:10,
        java:20,
        csharp:10
    },
    contacts:{
        Bart:"bart@intecbrussel.be",
        Atilla:"atilla@intecbrussel.be"
    },
    location:['Rouppeplein','Brussel']
}