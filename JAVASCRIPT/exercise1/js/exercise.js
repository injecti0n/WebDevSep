let title = document.getElementById('title');


function mouseOver(){

    title.innerText=title.innerText.toUpperCase()
    console.log(title.innerText.toUpperCase())
}

function mouseOut(){
    title.innerText=title.innerText.toLowerCase();
    console.log(title.innerText.toLowerCase())

}

title.addEventListener('mouseover',mouseOver);
title.addEventListener('mouseout',mouseOut)

// mouseOver() // JAVASCRIPT
// mouseOut() // javascript


