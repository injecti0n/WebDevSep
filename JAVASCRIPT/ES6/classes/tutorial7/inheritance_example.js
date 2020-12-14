class MainClass{
    constructor(x,y,z){
        this.x=x;
        this.y=y;
        this.z=z;
        this.data=[]
    }

    makeData(){
        let temp ={
            x:this.x,
            y:this.y,
            z:this.z,
            a:this.a,
            b:this.b,
            c:this.c
        }
        this.data.push(temp)
        return this.data
    }

    addDataStorage(){
        return localStorage.setItem('inheritance',JSON.stringify(this.data))
    }

}


class SubClass extends MainClass{
    constructor(x,y,z,a,b,c){
        super(x,y,z)
        this.a=a;
        this.b=b;
        this.c=c;
    }
}

let app = new SubClass("test1","test2","test3","anothertest1","anothertest2","anothertest3")
console.log(app.makeData())
app.addDataStorage()

