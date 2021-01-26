let buttons = document.querySelectorAll('button');
let output = document.querySelector('.output')
buttons.forEach(function(button,index){
   // console.log(button)
    button.addEventListener('click',function(e){
        if(button.className === 'btn btn-primary increase'){
            incMethod()
        }
        if(button.className==='btn btn-danger decrease'){
            decMethod()
        }
        if(button.className==='btn btn-warning reset'){
            resetMethod()
        }
    })
    console.log('button message!!!',index)
})


let increaseButton = document.querySelector('.increase');
let decreaseButton = document.querySelector('.decrease');
let resetButton = document.querySelector('.reset')


increaseButton.addEventListener('click',functionName)
decreaseButton.addEventListener('click',functionName)
resetButton.addEventListener('click',functionName)


function incMethod(){
    console.log('increase')
    sessionStorage.counter= Number(sessionStorage.counter)+1;
    output.innerHTML=`You clicked ${sessionStorage.counter} times`

}

function decMethod(){
    console.log('decMethod')
    console.log(sessionStorage.counter)
    let dec = Number(sessionStorage.getItem('counter'))-1;
    sessionStorage.setItem('counter',dec)

    output.innerHTML=`You clicked ${sessionStorage.counter} times`
}

function resetMethod(){
    console.log('resetMethod')
    sessionStorage.clear();
    return sessionStorage.setItem('counter',0);
}

