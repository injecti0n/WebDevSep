// let data = 1;

// async function getData(){
//     let retrieved = await data;
//     console.log(retrieved)
// }


// getData()

// let user = {
//     id:1,
//     name:"root",
//     pwd:12344323
// }

// let user1 = {
//     id:2,
//     name:"root1",
//     pwd:12344323333
// }

// async function getUser(obj){
//     let response = await obj
//     console.log(response)
// }

// async function getUser_converted(obj){
//     return new Promise((resolve,reject)=>{
//         resolve(obj)
//         console.log(obj)
//     })
// }

// console.log(getUser_converted(user1))

// getUser(user)


let data = [
    {
        id: 1,
        name: "Priya"
    }
]

async function getStudents() {
    return await data.forEach(user => console.log(user))
}

async function addStudent(obj) {
    let temp = await data; // wait for data
    temp.push(obj) // added new obj into temp array
    data = temp; // data array updated
    return obj
}



addStudent(
    {
        id: 2,
        name: "Susan"
    }
).then(response => console.log("Response from addStudewnt", response)).then(getStudents)

addStudent(
    {
        id: 3,
        name: "Mikail"
    }
).then(response => console.log("Response from addStudewnt", response)).then(getStudents)



