let control = document.getElementById('control');
let light = document.getElementById('light')

let light_control = false; // light off as default (boolean)
function lightSwitcher(){
    if(!light_control){ // light on
        light_control=true
        control.src="img/control_on.png" // updated src attribute of img tagname in the page
        light.src="img/light_on.png" // updated src attribute of img tagname in the page
    }else{ // light off
        light_control=false
        control.src="img/control_off.png" // updated src attribute of img tagname in the page
        light.src="img/light_off.png" // updated src attribute of img tagname in the page
    }
}

control.addEventListener('click',lightSwitcher)
