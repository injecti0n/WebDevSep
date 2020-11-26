// DASHBOARD

const greeting = document.querySelector('.welcomeUser');
const logout = document.querySelector('.logout');

logout.addEventListener('click',logoutFunction)

function logoutFunction(event){
    sessionStorage.clear();
    location.href='login.html';
    event.preventDefault();

}

if(typeof(Storage)!== "undefined"){
    if(sessionStorage.user == undefined && sessionStorage.pass == undefined){
        location.href='login.html';
    }else{
        greeting.innerText= `Welcome ${sessionStorage.user.toUpperCase()}`;
    }
}
