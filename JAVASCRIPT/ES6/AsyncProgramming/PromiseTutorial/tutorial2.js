// Promise example McDonald_Order

const McDonalds = (mainfood,drink,extra)=>{
    return new Promise((resolve,reject)=>{
        if(typeof mainfood !='string'){
            reject('String Only please!')
        }else{
            resolve(`Your Order:\n${mainfood},${drink} and ${extra}\nTicket Number:${Math.floor(Math.random()*100)+1}`)
        }
    })
}

McDonalds('BigMac','Coca Cola','Chickenwing')
.then(res=>{
    console.log(res)
})

McDonalds('Vegeterian Burger','Water','Spring Rolls')
.then((elnura)=>{
    console.log(elnura)
})

McDonalds(232323,"cola",'Fries')
.then((response)=>{
    console.log(response)
})
.catch(err=>{
    console.log(err)
})


let getAllUsers = ()=>{

}

let users = []
let AddUser = (user_obj)=>{
    
}

// use addUser .then