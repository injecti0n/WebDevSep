
let favorite = document.querySelector('.favorite');
let comments = document.querySelector('.comments');
let name = document.getElementById('name')
let message = document.getElementById('message')
let save = document.querySelector('.save')
let poweroff = document.querySelector('.fa-power-off')

let favCount=0


favorite.addEventListener('click',(e)=>{
    e.preventDefault()
    favCount++;
    favorite.innerHTML=` ${favCount}`
})

save.addEventListener('click',(e)=>{
    e.preventDefault();
    
    //comments.append(commentModel(name.value,message.value))
    comments.innerHTML += `
    <i class="fa fa-user" aria-hidden="true"></i> ${name.value}: 
                <p class="card-text">${message.value}</p>

    `
})
