

console.log("A");console.log("B")


ten = 10

console.log(ten)


var a = 10
console.log(typeof a)
var b = "10"
console.log(typeof b)

// Type coersion 
if(a == b){
    console.log(b)
    console.log(b)
    console.log("here")
}

var firstName = "Amrit"
var lastName = "Anand"
firstName += lastName
console.log(firstName)

// ==
// ===
// =>
//<=
// ++
//!=
// --
//+=
// -=


var ab = 10;
var dc = 10.5;
console.log(ab * dc)
console.log(ab + dc)
console.log(ab / dc)
console.log(ab % dc)
console.log(ab ** dc)
console.log(dc.toFixed())


console.log(typeof h)

var firstName = "Gaurav"
var lastName = "Kumar"

console.log(firstName + " "+ lastName)
console.log(`${firstName} ${lastName} Student of Newton`)

console.log(typeof firstName)
console.log(firstName.concat(lastName))
var stringClass = new String("test")
console.log(stringClass instanceof String)
console.log(stringClass.toString())

var areWeInClass = 0

areWeInClass ? console.log("Lets learn JS") : areWeInClass ? console.log("Second") : console.log("second false")

if(areWeInClass){
    console.log("Lets learn JS")
}else{
    console.log("Lets practice JS")
}

var car = {
    color:"black",
    brand:"BMW",
    model:"3 Series",
    getMeVehicle : () =>{
        console.log("Vehicle is on the way ")
    }
}

console.log(car.color)
console.log(car.brand)
console.log(car.price)

car["price"] = "40Lacs"

console.log(car.price)

car.getMeVehicle()

class Car{
    constructor(color,brand,model){
        this.color=color
        this.brand=brand
        this.model=model
    }
}


var mercedes = new Car("Red","Mercedes","E Class")

console.log(mercedes.brand)

mercedes["price"] = "50Lacs"

console.log(mercedes.price)

const num = 100;
const obj = {};
obj["name"] = "Dipika"
console.log(obj.name)
// obj = {
//     name:"Dipika"
// }
console.log(typeof obj)

var array = ["Apple","Google","Facebook",1,2,3,4,5,6,7,true,false,-1,0,{}]

console.log(array[0],array[1])
console.log(typeof array)

var map = new Map()
var set = new Set()
console.log(typeof set)
console.log(typeof map)