const users = [
    {
        id:2,
        name:"Priya",
        password:"12121212"
    },
    {
        id:1,
        name:"Mikail",
        password:"12121212"
    },
    {
        id:4,
        name:"Yannick",
        password:"12121212"
    },
    {
        id:5,
        name:"Kobe",
        password:"12121212"
    },
    {
        id:9,
        name:"Emmanuel",
        password:"12121212"
    },
    {
        id:12,
        name:"Susan",
        password:"12121212"
    }
]

const getAllUsers = (arr,name)=>{
    return new Promise((resolve,reject)=>{
        let result = arr.map(user=>{
            if(typeof user === 'object'){
                return user
            }else{
                reject('Error!')
            }
        })
        resolve(result)
    })
}

let _name = 'Kobe'

getAllUsers(users,_name)
.then(res=>res.sort((a,b)=>a.id - b.id)) // sorting by id
.then(newRes=>newRes.filter(user=>user.name===_name)) // filter by name
.then(data=>console.log(data)) // return last updated users data
.catch(error=>console.error(error))

