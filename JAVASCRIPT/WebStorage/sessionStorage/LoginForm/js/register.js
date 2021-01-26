// html elements
const inputs = document.querySelectorAll('input');
const register = document.querySelector('#register');
const form = document.querySelector('.login-form')
const button = document.querySelectorAll('button');

register.addEventListener('click', registerAccount);

function registerAccount(event) {
    if (typeof (Storage) !== 'undefined') {
        if (sessionStorage.user == null && sessionStorage.pass == null && inputs[0].value !="" && inputs[1].value !="") {
            
            displayMessage('success',"Your account has been created");
            sessionStorage.user = inputs[0].value;
            sessionStorage.pass = inputs[1].value;
            setTimeout(function(){
                location.href='login.html';
            },3000);
        }else{
            displayMessage('danger',"Inputs are empty or an account is exist in sessionStorage");
        }
    }
    event.preventDefault();
}


button[1].addEventListener('click',logoutFunction);

function logoutFunction(event) {
    console.log('hello');
    sessionStorage.clear();
    event.preventDefault();
}


function displayMessage(type, message) {

    /*

    <div class="alert alert-${type}" role="alert">
  This is danger message
</div>*/

    const div = document.createElement('div')
    div.className = `alert alert-${type}`;
    div.role = "alert";
    div.innerHTML = message;
    form.appendChild(div);
    form.appendChild(div)
    console.log(div);
    setTimeout(function () {
        div.remove();
    }, 3000);

}
