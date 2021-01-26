/*

INSTALL JSON-SERVER
on Windows : npm install json-server -g
on Linux/MacOS : sudo npm install json-server -g

BASIC USAGE OF json-server
json-server file.json

with custom port
json-server file.json -p 5000

*/

/*
HTTP Requests
GET
The GET method is used to retrieve information from the given server using a given URI. Requests using GET should only retrieve data and should have no other effect on the data.

PUT
Replaces all the current representations of the target resource with the uploaded content.

DELETE
Removes all the current representations of the target resource given by URI.

POST
A POST request is used to send data to the server, for example, customer information, file upload, etc. using HTML forms.

*/


/*

async function
forEach
fetchAPI
card Element of bootstrap4

*/



// FETCH API
const apiUrl= "http://localhost:3000/users"
const single= document.querySelector('#singleUser')
const output= document.querySelector('#output')
const button = document.querySelector('button')
// let response = fetch(apiUrl);
// response.then(res=>console.log(res))
// response.then(res=>res.json()).then(data=>console.log(data))


async function getUsers(){
    let response = await fetch(apiUrl);
    let data = await response.json()
    console.log(data)
}


async function singleUser(id){
    let response = await fetch(`http://localhost:3000/users/${id}`)
    let data = await response.json();
    return JSON.stringify(data)
}


button.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('test')
    output.value=""
    console.log(single.value)
    singleUser(single.value).then(response=>{
        output.value=response
    })
   
})

getUsers();
singleUser();

