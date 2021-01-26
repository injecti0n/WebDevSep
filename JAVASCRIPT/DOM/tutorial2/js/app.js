// navigation in dom tree




var CardBody = document.querySelectorAll('.card-body')
var listofTodos = document.querySelector('.list-group')
var singleTodo = document.querySelector('.list-group-item:nth-child(5)')
var nthChildsofTodos = document.querySelectorAll('.list-group-item:nth-child(even)')

console.log(nthChildsofTodos)
console.log(listofTodos)

console.log(singleTodo)


nthChildsofTodos.forEach(function(todo){
    todo.className="list-group-item d-flex justify-content-between bg-secondary"
})

// child nodes

var ConsoleResult;
ConsoleResult = listofTodos.childNodes[0];
ConsoleResult = listofTodos.children[0];
console.log("Console Result>",ConsoleResult)

let arr  = [1,2,3,4,5,6,"this is last item"]
console.log(arr[arr.length-1])

ConsoleResult.innerHTML="This is todo title - new "

ConsoleResult = CardBody[1];
ConsoleResult = ConsoleResult.children[1].textContent="Title has been updated";
ConsoleResult = CardBody[1];
ConsoleResult = ConsoleResult.firstElementChild
ConsoleResult = CardBody[1];
//ConsoleResult = ConsoleResult.childElementCount;
//ConsoleResult = ConsoleResult.children.length;
//ConsoleResult = ConsoleResult.lastElementChild


// nextElementSibling 

//ConsoleResult = singleTodo.nextElementSibling;

// previousElement
//ConsoleResult = singleTodo.previousElementSibling
ConsoleResult = singleTodo.nextElementSibling.nextElementSibling
ConsoleResult = singleTodo.previousElementSibling.previousElementSibling

console.log("Result", ConsoleResult)

