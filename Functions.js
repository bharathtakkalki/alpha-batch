/* 
    Function  => Regular
              =>  Arrow 
              => Anonymous
              => IIFE immediately invoked Function 
              => Constructor Function
*/

// Constructor
function Car (brand,model,price){
    this.model = model
    this.brand = brand
    this.price = price
    this.getBrand = function(){
        return this.brand
    }
    function priFunc(){
        console.log("Im a private Function")
    }
}

var bmw = new Car("BMW","5 Series","60l")
var audi = new Car("Audi","A4","50l")

console.log(audi)

console.log(bmw)

console.log(bmw.getBrand())

let globalScoped = "Im globalScoped"

function scopeOne(){
    var scopeOne = "Im scopeOne"
    let newLet =  100
    const newConst = 1000
    if(true){
        const newConstOne= 10000;
        var newVar = 10
    }
    console.log(newConst)
    console.log(newVar)
    // console.log(newLet)
    globalScoped = " New Value"
    console.log("Global Scope:",globalScoped)
    console.log(globalScoped)
    
    scopeTwo()
    function scopeTwo(){
        var scopeTwo =  "Im scopeTwo"
        console.log(scopeOne)
        console.log(newVar)
        console.log(newLet)
        scopeThree()
        console.log(globalScoped)
        function scopeThree(){
            var globalScoped = "Im in Scope Three"
            var scopeThreeVar = "Scope Three"
            console.log(globalScoped)
            console.log(scopeOne)
            console.log(scopeTwo)



        }
    }

}


scopeOne()

console.log(globalScoped)

// Closure

function createStorage (storeValue) {
    var storedValue = storeValue

    return function(){
        return storedValue
    }
}

// 2uh4u3g4u5u345j34j5kh34ku63j5b2u35j2brj234u2r23jbru23griu23grui

let storedValue = 1000
const getStoredData =  createStorage(1000)
const newStoredData = createStorage(10)
// console.log(storedValue)
let storedValueFromReadOnly = getStoredData()

storedValue = 100
storedValueFromReadOnly = 10
console.log(getStoredData())

console.log(getStoredData())
console.log(newStoredData());



(function(){
    var value = 100

    const test = () =>{
        console.log(value)
    }
    test()
})()


function createMultiplier(multiplier){
    return (value) => multiplier * value
}

const twoMultiplier = createMultiplier(2)
const twelveMultiplier = createMultiplier(12)
const sevenMultiplier =  createMultiplier(7)

console.log(twelveMultiplier(242))
console.log(sevenMultiplier(242))
console.log(twoMultiplier(242))

// Arrow Function vs Regular Function

