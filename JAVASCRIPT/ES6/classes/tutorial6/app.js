class People {
    constructor() {
        this.data = []
    }

    show() {
        return this.data
    }

    addLocalStorage() {
        localStorage.setItem('users', JSON.stringify(this.data))
    }

    addUser(username, password, role = "guest") {

        // this.username = username;
        // this.password = password;
        // this.role = role;

        let user = {
            username: username,
            password: password,
            role: role
        }
        this.data.push(user)
        console.log('User has been added!')
    }


}

let user1 = new People()
user1.addUser('Root','123456','Admin')
user1.addUser('Ali','323232','Moderator')
user1.addLocalStorage();
console.log(user1.show())
