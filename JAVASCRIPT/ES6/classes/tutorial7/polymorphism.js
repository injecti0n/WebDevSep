// OOP - Polymorphism

// class Animal { 
//     // baseclass or mainclass
//     makeSound(){
//         console.log("Animal voice")
//     }

// }

// class Cat extends Animal {

//     makeSound(){
//         console.log("Meow meow")
//     }


// }

// class Dog extends Animal {

//     makeSound(){
//         console.log("Hav hav!")
//     }
// }

// let a = new Cat();
// a.makeSound()


class Person {
    constructor(name,age){
        this.name=name
        this.age=age
    }

    print(){
        let output = `name=>${this.name}\nage=>${this.age}`
        console.log(output)
    }



}

class Student extends Person {

    constructor(name,age,course){
        super(name,age)
        this.course=course
    }

    print(){
        let output = `name=>${this.name}\nage=>${this.age}\ncourse=>${this.course}`
        console.log(output)
    }

}

let student = new Student("Arne",25,"WebDev");
student.print()