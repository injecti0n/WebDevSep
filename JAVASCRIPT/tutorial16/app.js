// switch statement

var number =5;

switch(number){
    case 0:
        console.log('0');
    case 3:
        console.log('3')
    case 5:
        console.log('True, 5');
        break;
    default:
        console.log('this is default message')
}
console.log(new Date().getDay())

switch(new Date().getDay()){
    case 0:
        console.log("Zondag")
    case 1:
        console.log("Maandag")
    case 2:
        console.log("Dinsdag")
}

// for loops / while / if else

var correctAnswer = "jackie"

function getAnswer(param){
    console.log("It's correct and answer is", param)
}

switch(correctAnswer){
    case "jackie":
        getAnswer(correctAnswer)
        break;
    case "Michael":
        console.log("test");
        
    default:
        console.log("testing switch")

}

switch(true){
    case true:
        // 
    case false:
        // 
    default:
        //
}
