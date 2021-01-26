
let favorite = document.querySelector('.favorite');

let comments = document.querySelector('.comments'); // for comments section

let name = document.getElementById('name') //input value
let message = document.getElementById('message') // input value

let save = document.querySelector('.save') // button

// let poweroff = document.querySelector('.fa-power-off')

let favCount=0


favorite.addEventListener('click',()=>{
    favCount++;
    favorite.innerHTML=` ${favCount}`
})

// comments

save.addEventListener('click',()=>{
    
    //comments.append(commentModel(name.value,message.value))
    comments.innerHTML += `
    <i class="fa fa-user" aria-hidden="true"></i> ${name.value}: 
                <p class="card-text">${message.value}</p>

    `
})
