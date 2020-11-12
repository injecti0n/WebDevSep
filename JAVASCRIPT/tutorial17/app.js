// /*

// while
// do while
// for
// for/in
// for/of

// */

// // while loop

// // let students = [
// //     {name:"Michael",age:20},
// //     {name:"George",age:19},
// //     20,
// //     "Test"
// // ]

// // // console.log(students.length)


// // let i=0
// // console.log(students.length-1)
// // while(i<students.length){ // condition 
// //     // code
// //     console.log(students[i].name)

    
// //     i++; 
    
// // }

// // while(i<100){
// //     i++;
// //     if(i%2==0){
// //         console.log(i)
// //     }
// // }

// // var answer;
// // var result=0;

// // while(answer%2!=0){
// //     answer = prompt('Enter a number!');
// //     result += parseInt(answer);
// //     // result = result + parseInt(answer);
  
// // }

// // console.log(parseInt(result),"result")

// // do while loop

// // do{
// //     // code block
// //    }while(condition)
   
// // var i=50
// // do{
// //     console.log(i)
// //     i++;
// // }while(i<=10);

// // var randomNumber;

// // do{
// //     randomNumber= Math.floor(Math.random()*100)+1
// //     console.log(randomNumber)
// // }while(randomNumber>=50)


// // var number;
// // var sum=0;

// // do{
// //     number = Number(prompt('Enter a number!'))
// //     sum+=number;
// //     console.log("Sum Result=>",sum)
// //     console.log(number)
// //     console.log(number!=0)
// // }while(number!=0)

// // var password= "123456"
// // var rateLimit=3;

// // while(rateLimit>0){
// //     var askUserPassword = prompt('Enter your password')
// //     rateLimit--;
// //     if(askUserPassword == password){
// //         console.log('welcome user')
// //         break;
// //     }else{
// //         console.log(`You've ${rateLimit} attemps left.`)
// //     }
// //     console.log(rateLimit)
// //     console.log(askUserPassword)
// // }

// // for loop
// let i=0
// for(i;i<=10;i++){
//    // console.log('Count:',i)
// }

// for(let i=1;i<=50;i++){
//     var oddNumber = i%2;
//     if(oddNumber!=0){
//        // console.log(i)

//     }
// }

// for(let i=1;i<=100;i++){
//     let res = i*i;
//    // console.log(res)
// }

// // let x,y
// // for(x=1,y=50; x<=10 && y>=50;x++){
// //     console.log(x,":",y)
// //     y++
   
// // }



var x,y;
/// nested for loop
for(x=9;x<=10;x++){


    for(y=1;y<=10;y++){


        var result = `${x} * ${y} = ${x*y}` 
        console.log(result)

    }

}


let NumbersinArray = []
console.log("Before",NumbersinArray)
for (let index = 0; index < 10; index++) {
    
    NumbersinArray.push(index)
    
}

console.log("After",NumbersinArray)

// for in loop

let student = {
    name:"Michael",
    age:23,
    profession:"Developer"
}

for(objName in student){ 
    console.log(student[objName]) // property of values of obj
}

for(name in student){
    console.log(`
    AttributeName: ${name}
    AttributeValue: ${student[name]}
    `)
}
 

// for of loop
// for/of lets you loop over data structures that are iterable such as Arrays, Strings, Maps, NodeLists, and more.
let WebDevClass = ['Priya','Susan','Lotte','Elnura','Mikail','Adnan','Emmanuel','Kobe','Arne','Yannick','Jotye','Oguz']

for (let [index,student] of WebDevClass.entries()){
    console.log(`${student}:${index}`)
}

let companyName = "INTECBRUSSEL"

for(let letter of companyName){
    console.log(letter)
}