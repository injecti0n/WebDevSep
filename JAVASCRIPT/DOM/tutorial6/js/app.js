
let todoInput = document.querySelector('#todo');
let addTodoBtn = document.querySelector('button.btn.btn-danger'); // old button
let todoForm = document.querySelector('#todo-form')
let ListofTodos = document.querySelector('.list-group')
let ClearTodos = document.querySelector('#clear-todos')
let Output;


Output = todoInput.classList
Output = todoInput.placeholder;
Output = todoInput.getAttribute('placeholder')
Output = todoInput.getAttribute('company');
todoInput.setAttribute('attrName', 'AttributeValue')
todoInput.removeAttribute('attrName')
Output = addTodoBtn;
let todoArray;
addTodoBtn.className = "btn btn-primary"

function createHTML(tagname) {
    return document.createElement(tagname)
}

var div = createHTML('div')

div.className = "container"
console.log(div)

function addTodoToArray(todo) {

    if (todoArray === null || todoArray === undefined) {
        todoArray = []; // init array
        console.log('array initialized')
        todoArray.push(todo)
    } else {
        todoArray.push(todo)
    }

    console.log(todoArray)

}


ListofTodos.addEventListener('click',function(e){
    if(e.target.className === "fa fa-remove"){
        console.log('remove action')
        console.log(e.target.parentElement.parentElement)
        e.target.parentElement.parentElement.remove();
    }
    e.preventDefault();
})


ClearTodos.addEventListener('click', function (e) {

    console.log(ListofTodos.firstElementChild)
    while (ListofTodos.firstElementChild != null) {
        ListofTodos.removeChild(ListofTodos.firstElementChild)
    }

})

function addTodo(event) {
    event.preventDefault();
    var li = document.createElement('li')
    var title = document.createTextNode(todoInput.value)
    li.className = "list-group-item d-flex justify-content-between"
    var a = document.createElement('a')
    a.href = "#"
    a.className = "delete-item"
    var i = document.createElement('i')
    i.className = "fa fa-remove"
    a.appendChild(i)
    li.appendChild(title)
    li.appendChild(a)
    ListofTodos.appendChild(li)
    console.log(todoInput.value)
    addTodoToArray(todoInput.value)

}

addTodoBtn.addEventListener('click', addTodo)



console.log(todoInput)
console.log(Output)