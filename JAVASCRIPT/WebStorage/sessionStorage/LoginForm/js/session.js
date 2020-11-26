

document.addEventListener('DOMContentLoaded',sessionCheck);

function sessionCheck() {
    setTimeout(function(){
        if (typeof (Storage) !== "undefined") { // is Storage available in browser?
            if(sessionStorage.user !=null && sessionStorage.pass !=null){ //
               // alert('An Account exist');
               location.href='dashboard.html'
            }else if(sessionStorage.user == null && sessionStorage.pass == null){
             //   alert('register.html');
                location.href='register.html';
            }else{
               // alert('login.html')
               location.href='login.html';
            }
        }
    },4000);
}
