class UFO{

    constructor(name,_type,model){
        this.name=name;
        this._type=_type;
        this.model=model;
    }

    droneInfo(){
        console.log(`
        Drone NAME: ${this.name}
        Drone Type: ${this._type}
        Drone Model: ${this.model}
        Drone Color: ${this.color}
        `)
    }


}


class CivilDrone extends UFO{
    constructor(name,_type,model,color){
        super(name,_type,model)
        this.color=color
       
    }

    civilInfo(){
        this.droneInfo()
        console.log("Civil Drone")
    }


}

class MilitaryDrone extends UFO{
    constructor(name,_type,model,color){
        super(name,_type,model)
        this.color=color
       
    }

    militaryInfo(){
        this.droneInfo()
        console.log("MilitaryDrone")
    }
}

// let drone = new UFO("Tello","Civil Drone","v.1","Black");
let drone = new CivilDrone("Tello","Civil Drone","v.1","Black")
let drone1 = new MilitaryDrone("IHA","Military Drone","v.1","Grey")
drone1.militaryInfo()
drone.civilInfo()

