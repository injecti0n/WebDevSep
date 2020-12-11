// ECMASCRIPT v5

// function studentInfo(name,course){
//     this.name = name;
//     this.course = course
// }

// studentInfo.prototype.showInfo=function(){
//     console.log(`Student's name is ${this.name} and he is studying ${this.course}`)
// }

// let student1 = new studentInfo('Priya','Javascript')
// student1.showInfo()

// ECMSSCRIPT v6

// class Student {
//     // constructor function
//     constructor(name,course){ 
//         this.name=name
//         this.course = course
//     }

//     showInfo(){
//         console.log(`Student's name is ${this.name} and he is studying ${this.course}`)
//     }

// }

// let student2 = new Student('Adnan','Javascript');
// student2.showInfo();

// class GameBoy {
// /*

// volume up
// volume down
// power on
// power off
// left-right-backward-forward

// */
//     constructor(colour, weight, height, model) {
//         this.colour = colour
//         this.weight = weight
//         this.height = height
//         this.model = model
//     }

//     device(){
//         console.log(`Weight => ${this.weight}\nHeight => ${this.height}\nColour => ${this.colour}\nModel => ${this.model}`)
//     }

//     volumeup(){

//     }

//     volumedown(){

//     }

//     poweron(){

//     }

//     poweroff(){

//     }

//     turnLeft(){

//     }

//     turnRight(){

//     }

//     backward(){

//     }

//     forward(){

//     }

// }

// let nintendo = new GameBoy('red','100gr','5.26 in','v1');

// nintendo.device();


class People{
    constructor(username,password,role="guest"){
        this.username = username;
        this.password = password;
        this.role = role;
        this.data=[]
    }

    show(){
        return this.data
    }

    addLocalStorage(){
        localStorage.setItem('users',JSON.stringify(this.data))
    }

    addUser(){
        let user= {
            username:this.username,
            password:this.password,
            role:this.role
        }
        this.data.push(user)
        console.log('User has been added!')
    }


    test(){
        console.log(this.role)
    }
}

let user1=  new People('root','toor','moderator')
let user2=  new People('root1','toor','admin')
let user3=  new People('root2','toor','guest')
user1.addUser() // user added here
user2.addUser() // user added here
user3.addUser() // user added here
console.log(user1.show()) // users data shows here
user1.addLocalStorage();
console.log(user2.show())