// events

function whenPageLoadEvent(){
    var loadTime = window.performance.timing.domContentLoadedEventEnd- window.performance.timing.navigationStart;
    console.log('test',loadTime)
    return document.body.style.backgroundColor="black";
}

function clickHandler(){
    console.log('onClick event')
}

function whenMouseOverItem(){
    console.log('Event type is whenMouseOverItem')
}

function OnMouseOutEvent(){
    console.log('OnMouseOutEvent')
}

function mouseUpHandler(){
    console.log('OnMouseUp EVent')
}

function mouseDownHandler(){
    console.log('onmousedown EVent')
}

function isUserCopiedSomething(){
    console.log('User copied text from the page!')
}

function doubleClickHandler(){
    console.log("You've clicked it twice!")
}

function keyDownHandler(){
    console.log("User pressed a key on the keyboard!")
}

function onChangeHandler(){
    let option = document.getElementById('courses').value;
    let result  = document.getElementById('result');
    result.innerHTML=`${option}`
}

let asd = 'Jack"s age';


// selector

let google = document.getElementById('google');

google.addEventListener('click',function(){
    console.log('google')
})