let calcInput = document.querySelector('#calc');
let ops = document.querySelectorAll('a')
function Operator() {
       
}

Operator.prototype.CalcIt=function(){
    ops.forEach(op=>{
        op.addEventListener('click',e=>{
            console.log(e.target.innerText)
            if(e.target.innerText != 'ENTER'){
                calcInput.value+=e.target.innerText
            }
            if(e.target.innerText==='ENTER'){
                calcInput.value = eval(calcInput.value)
                calcInput.className="form-control bg-warning text-black"
            }
            if(e.target.innerText==="CLEAR"){
                calcInput.value=""
                calcInput.className="form-control bg-white text-black"
            }
        })
    })
}



let calc = new Operator()
calc.CalcIt();