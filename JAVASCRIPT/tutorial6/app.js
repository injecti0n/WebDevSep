let student = {
    scores:[50,60,70,80,90,100], // Array
    firstname:"Jack", // String
    lastname:"Sparrow", // String
    isPassed:true, // Boolean
    age:25, // Number
    showstudent:function(){ // Function
        console.log('this is show student function')
    },
    books:{
        category:"Philosophy",
        title:"Nietzsche"
    }
}

// classic way
let _print = 'Fullname: ' + student.firstname + " " + student.lastname; 
console.log(_print)

// modern way
let print = `
Fullname: ${student.firstname} ${student.lastname}
Is Student passed the exam: ${student.isPassed}
Age: ${student.age}
Favorite Author: ${student.books.title}
` 
console.log(print)

student.showstudent();