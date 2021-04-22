// Spread Operator

const numbers = [1,2,3,4,5]
const numbersTwo = numbers

let numOne = 10
let numTwo = numOne

console.log(numOne)
console.log(numTwo)

numTwo = 100

console.log(numOne)
console.log(numTwo)

console.log(numbers)
console.log(numbersTwo)

const numbersThree = [...numbers]
console.log(numbersThree)
numbersTwo.pop()
numbersThree.shift()


console.log(numbers)
console.log(numbersTwo)
console.log(numbersThree)

const objectOne = {
    name:"Vivek Patel",
    age:25,
    education:{
        school:{
            name:"DPS"
        }
    }
}

const objectTwo = objectOne

console.log(objectOne)
console.log(objectTwo)
const objectThree = {...objectOne} // Shallow Copy
console.log(objectThree)
objectTwo.age = 28

objectTwo.education.school.name = "Bishop Cottons School"
console.log(objectOne)
console.log(objectTwo)
console.log(objectThree)
