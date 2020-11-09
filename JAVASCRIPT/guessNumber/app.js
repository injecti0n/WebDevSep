const result = document.getElementById('inputField');
const scaleIndicator = document.getElementById('scale');
const buttonClick = document.getElementById('buttonClick')
 
 
const computerNumber = 99;
 
function guessNumber(){
    let _result = Number(result.value)
    if (_result === computerNumber){
        scaleIndicator.innerText = `${_result} is Correct!`
    }else if (_result > computerNumber){    
        scaleIndicator.innerText = `${_result} is too high!`
    } else if (_result < computerNumber){
        scaleIndicator.innerText = `${_result} is too low!`
    }
}
 
buttonClick.addEventListener('click',guessNumber)