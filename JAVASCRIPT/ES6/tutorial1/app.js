
// let todoInput = document.querySelector('#todo');
// let addTodoBtn = document.querySelector('button.btn.btn-danger'); // old button
// let todoForm = document.querySelector('#todo-form')
// let ListofTodos = document.querySelector('.list-group')
// let ClearTodos = document.querySelector('#clear-todos')
// let Output;


// Output = todoInput.classList
// Output = todoInput.placeholder;
// Output = todoInput.getAttribute('placeholder')
// Output = todoInput.getAttribute('company');
// todoInput.setAttribute('attrName', 'AttributeValue')
// todoInput.removeAttribute('attrName')
// Output = addTodoBtn;
// let todoArray;
// addTodoBtn.className = "btn btn-primary"

// function createHTML(tagname) {
//     return document.createElement(tagname)
// }

// var div = createHTML('div')

// div.className = "container"
// console.log(div)

// function addTodoToArray(todo) {

//     if (todoArray === null || todoArray === undefined) {
//         todoArray = []; // init array
//         console.log('array initialized')
//         todoArray.push(todo)
//     } else {
//         todoArray.push(todo)
//     }

//     console.log(todoArray)

// }


// ListofTodos.addEventListener('click', function (e) {
//     if (e.target.className === "fa fa-remove") {
//         console.log('remove action')
//         console.log(e.target.parentElement.parentElement)
//         e.target.parentElement.parentElement.remove();
//     }
//     e.preventDefault();
// })


// ClearTodos.addEventListener('click', function (e) {

//     console.log(ListofTodos.firstElementChild)
//     while (ListofTodos.firstElementChild != null) {
//         ListofTodos.removeChild(ListofTodos.firstElementChild)
//     }

// })




// /*

// es6

// */

// const tagNameGenerator = t => document.createElement(t);
// const x = t => document.createElement(t);
// // let div = tagNameGenerator('div')
// // div.className="container"
// // console.log(div)


// const makeTodo = todo_title => {

//     let li = x('li');
//     let title = document.createTextNode(todo_title)
//     li.className = "list-group-item d-flex justify-content-between"
//     let a = x('a');
//     a.href = "#"
//     a.className = "delete-item"
//     let i = x('i');
//     i.className = "fa fa-remove"
//     a.appendChild(i)
//     li.appendChild(title)
//     li.appendChild(a)
//     return ListofTodos.appendChild(li)
// }




// // function addTodo(event) {
// //     event.preventDefault();
// //     // var li = document.createElement('li')
// //     // var title = document.createTextNode(todoInput.value)
// //     // li.className = "list-group-item d-flex justify-content-between"
// //     // var a = document.createElement('a')
// //     // a.href = "#"
// //     // a.className = "delete-item"
// //     // var i = document.createElement('i')
// //     // i.className = "fa fa-remove"
// //     // a.appendChild(i)
// //     // li.appendChild(title)
// //     // li.appendChild(a)
// //     // ListofTodos.appendChild(li)
// //     console.log(todoInput.value)
// //     makeTodo(todoInput.value)
// //     addTodoToArray(todoInput.value)

// // }

// const addTodoToStorage = title => {
//     let temp = getDataStorage(); // current array (todolist) in localStorage
//     temp.push(title);
//     localStorage.setItem('data', JSON.stringify(temp))
// }

// const addTodo = event => {
//     event.preventDefault();
//     console.log(todoInput.value)
//     makeTodo(todoInput.value)
//     addTodoToArray(todoInput.value)
//     addTodoToStorage(todoInput.value)
// }

// addTodoBtn.addEventListener('click', addTodo)



// console.log(todoInput)
// console.log(Output)

// const getDataStorage = () => {
//     let temp;
//     if (localStorage.getItem('data') === null) {
//         temp = []
//     } else {
//         temp = JSON.parse(localStorage.getItem('data'))
//     }
//     return temp;
// }

// document.addEventListener('DOMContentLoaded', () => {
//     let temp = getDataStorage();
//     temp.forEach(todo => makeTodo(todo))
// })





// // no args arrow function
// const c = () => console.log('test arrow function');

// // single arg with arrow function
// const d = name => name;

// // multiple args with arrow func
// const e = (firstname, lastname) => { return `${firstname} ${lastname}` }

// c()
// console.log(d('intecbrussel'))
// console.log(e('Jack', 'Michael'))


// const numbers = [1,2,3,4,5,6,7,8,9]

// es5
// numbers.forEach(function(number){
//     console.log(number)
// })

// es6
// numbers.forEach(number=>number)

(name=>console.log(name))('Atilla')