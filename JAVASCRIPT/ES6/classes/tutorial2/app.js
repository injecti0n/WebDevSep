// User Model
function User(name,age,job,email,username,password){
    this.name=name;
    this.age = age;
    this.job = job;
    this.email = email;
    this.user = username;
    this.pass = password;
    this.users = []
}

// get User Information
User.prototype.getUser = function(){
    // console.log(`NAME:${this.name}\nAGE:${this.age}\nJOB:${this.job}\nEMAIL:${this.email}\nUSER:${this.user}\nPASS:${this.pass}`)
    console.log(this.users)
}

User.prototype.addUser = function(){
    let user = {
        name:this.name,
        age:this.age,
        job:this.job,
        email:this.email,
        user:this.user,
        pass:this.pass
    }
    this.users.push(user)
  //  console.log(user)
   // console.log(this.users)
}

let user1 = new User('Lili',25,"Dancer","lili@micropsoft.com","lili","123123");
let user2 = new User('Mike',25,"Programmer","Mike@micropsoft.com","Mike","123123");
user2.addUser();
user1.addUser(); // called here
user2.getUser();
user1.getUser();
