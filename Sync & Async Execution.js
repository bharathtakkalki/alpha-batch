
// console.log("Im First")

// function timeOut5sec(){
//     console.log("Im second")
//     setTimeout(() =>{
//         console.log("Im third")
//     },1000)
// }

// function newFuncOne(){
//     console.log("Im fourth")
// }

// function newFuncTwo(){
//     console.log("Im fifth")
// }


// function newFuncThree(){
//     console.log("Im sixth")
// }


// console.log("Im seventh")

// timeOut5sec()
// newFuncOne()
// newFuncTwo()
// newFuncThree()


console.log("Im First")

function forLoop(){
    let data
    setTimeout(() =>{
        data = 100 
    },100)
    return data
}

function printData(data) {
    console.log(data)
}

let x = forLoop()


printData(x)

let array = [1,2,3,4,5,6,7,8,9,10]

const newArray = array.map(element => element + 1)
console.log(newArray)

const newEvenArray  = array.filter(element => element % 2 === 0)
console.log(newEvenArray)


// Hoisting, Asynchronous Execution & DOM