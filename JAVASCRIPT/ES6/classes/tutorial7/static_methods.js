// class Student {

//     constructor(name) {
//         this.name = name;
//         this.users = []
//         this.count = 0
//     }

//     printName() {
//         console.log("Non-static method")
//     }

//     static showName() {
//         console.log("Static Method")
//     }

//     static s_Increase() {
//         return this.count
//     }

//     increase() {

//         return Student.s_Increase();

//     }

//     static collectUserInfo() {
//         let temp = {
//             fullname: this.name
//         }
//         return temp
//     }

// }


class Students {
    constructor(name){
        this.name = name;
        this.count=0
    }

    static addStudent(name){
        // factory pattern
        //this._name = name;
        let temp = {
            name: name
        }
        return temp
    }

    showStudent(){
        console.log(Students.addStudent(this.name))
    }
}

let student = new Students("Emmanuel")
student.showStudent();

// let st1 = new Student("Priya")
// console.log(st1.increase())


//Student.showName()
// Student.printName()