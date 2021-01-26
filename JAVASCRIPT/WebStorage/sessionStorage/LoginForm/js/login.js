// html elements

const username = document.querySelector('#username');
const password = document.querySelector('#password');
const loginbtn = document.querySelector('#login');

loginbtn.addEventListener('click',checkAuth);

function checkAuth(event){
    if(typeof(Storage)!== 'undefined'){
        if(sessionStorage.user == username.value && sessionStorage.pass == password.value){

            location.href="dashboard.html";
        }else{

        }
    }
    event.preventDefault();
}

// // LOGIN PAGE
// var expireDate = new Date(2020,2,25);

// document.cookie=`name=Atilla; expires=${expireDate.toUTCString()}`