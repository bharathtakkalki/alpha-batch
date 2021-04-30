const Animal = function(type,name){
    this.type=type
    this.name=name
    this.intro = function(){
        console.log("Im "+ this.name)
    }
}

const lion = new Animal("Mammals","Lion")

console.log(lion.__proto__)

console.log(Array.prototype)
Array.prototype.includesOf = function(){
    console.log("Custom method is Called")
}

const newArray = [1,2,3,4,5]
newArray.includesOf()
console.log(Function.prototype)

const object = {a:1,b:2}

console.log(object.__proto__)
object.__proto__ = Array.prototype
object.forEach(element => {
    
});

console.log(typeof null)

console.log(typeof class test{})

const Mammals = function(size,color){
    this.size=size
    this.color=color
}

console.log(lion.__proto__)
