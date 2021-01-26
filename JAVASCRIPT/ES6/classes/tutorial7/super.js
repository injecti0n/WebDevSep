class A {
    constructor(name,age){
        this.name = name
        this.age=age
    }

    print(){
        console.log(this.name,this.age,this.job)
    }
}



///// 

class B extends A{
    constructor(name,age,job){
        super(name,age)
        this.job=job;
    }

    show(){
        this.print()
    }
}

let test = new B('Susan',25,"Programmer")
test.show()

