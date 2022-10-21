class AutoMobile {
    constructor (name , model , color , type , ) {
        this.name = name
        this.model = model
        this.color = color
        this.type = type
    }

    start () {
        console.log(`${this.name} is Ready to Drive`)
    }

    openDoor(){
        console.log(`${this.name} Door is Open`)
    }

    closeDoor() {
        console.log(`${this.name} Door Has Been Closed`)
    }

    displayInfo() {
        console.log(`Name : ${this.name}` )
        console.log(`Model : ${this.model}` )
        console.log(`Color : ${this.color}` )
        console.log(`Type : ${this.type}` )
    }
}

class Truck extends AutoMobile {
    constructor(name , model , color , type , maxSpeed , noOfDoors ) {
        super(name , model , color , type)
        this.maxSpeed = maxSpeed
        this.noOfDoors = noOfDoors
    }

    displayInfo() {
        super.displayInfo();
        console.log(`Max Speed : ${this.maxSpeed}`)
        console.log(`Number of Doors : ${this.noOfDoors}`)
    }
}

class Car extends AutoMobile {
    constructor(name , model , color , type , maxSpeed , noOfDoors , convertible) {
        super(name , model , color , type);
        this.maxSpeed = maxSpeed
        this.noOfDoors = noOfDoors
        this.convertible = convertible
    }

    displayInfo() {
        super.displayInfo()
        console.log(`Max Speed : ${this.maxSpeed}`)
        console.log("Number of Doors : " + this.noOfDoors)
        console.log(`Convertible : ${this.convertible}`)
    }
}

class Bus extends AutoMobile {
    constructor(name , model , color , type , maxSpeed , noOfDoors , noOfSeats , isAirConditioned) {
        super(name , model , color , type);
        this.maxSpeed = maxSpeed
        this.noOfDoors = noOfDoors
        this.noOfSeats = noOfSeats
        this.isAirConditioned = isAirConditioned
    }

    displayInfo() {
        super.displayInfo()
        console.log(`Max Speed : ${this.maxSpeed}`)
        console.log("Number of Doors : " + this.noOfDoors)
        console.log(`number of Seats : ${this.noOfSeats}`)
        console.log(`Air Conditioned : ${this.isAirConditioned}`)
    }
}



const a = new AutoMobile("Honda" , "Civic" , "Red" , "Automatic")

console.log(a)
a.start()
a.openDoor()
a.closeDoor()

const t = new Truck("Hino" , "2018" , "white" , "Manual" , "120km/h" , 2)
t.displayInfo()


const c = new Car("Toyota" , "2022" , "black" , "Automatic" , "260 km/h" , 4 , false)
c.displayInfo()


const b = new Bus("Mazda" , "1980" , "red/yellow" , "Manual" , "180 km/h" , 3 , 36 , false )
b.displayInfo()

