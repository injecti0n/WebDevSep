// // localStorage

// let myArr = [1,2,3,4,5,6,7]

// console.log(myArr)

// console.log(typeof localStorage)

// localStorage.companyName = "intecbrussel"

























// localStorage.setItem('student','Priya,Susan,Mikail')
// localStorage.setItem('scores',myArr)
// localStorage.setItem('age',Number(25))

// // convert data into string format

// let myNewArray = JSON.stringify(myArr)
// //console.log(myNewArray)
// // insert object in string format into localStorage
// localStorage.setItem('myNewNumbers',myNewArray)

// let myArrayFromStorage =  localStorage.getItem('myNewNumbers')
// console.log("FromStorage",myArrayFromStorage)
// console.log(typeof myArrayFromStorage)


// // convert array data in string format to real array data

// let converted  = JSON.parse(localStorage.getItem('myNewNumbers'))
// console.log("Converted",converted)

// let students =[]

// let singleStudent = {
//     name:"Jack",
//     age:29,
//     course:"Javascript"
// }

// students.push(singleStudent)
// localStorage.setItem('allstudents',JSON.stringify(students))
// let getStudentsfromStorage = localStorage.getItem('allstudents');
// let convertDataForStudents = JSON.parse(getStudentsfromStorage)
// console.log('withoutconvert',getStudentsfromStorage)
// console.log('converted',convertDataForStudents)
// //console.log(students)



// console.log(localStorage)

// // localStorage.clear();




// let data = localStorage.getItem('todos') // should be converted into js object

// // domcontentloaded 
//     // use forEach 
//         // iterate data object > print todo title with model
//             // .forEach(){

//             // innerHTML + = `<p>${todo.title}</p> 
//             //}



let people_information = {
    fullname:"Michael Jackson"
}

//console.log(people)
//console.log(typeof people)

localStorage.setItem('people',JSON.stringify(people_information))

//localStorage.people = people_information;
localStorage.test = 'tets'

// let ArrayinStringFormat = '[2,3,4,5,6,5,6,7,8,89,6,5,4]'
let ArrayinStringFormat = localStorage.getItem('people')

let convertArrayData = JSON.parse(ArrayinStringFormat)
console.log(typeof ArrayinStringFormat)
console.log(typeof convertArrayData)
let convertitback = JSON.stringify(convertArrayData)
console.log(typeof convertitback)
console.log(ArrayinStringFormat)
console.log(convertArrayData)

// ArrayinStringFormat.forEach(function(letter){
//     console.log(letter)
// })