// Deep vs Shallow


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
const objectThree = {...objectOne}
const objectFour = JSON.parse(JSON.stringify(objectOne))

objectTwo.age = 28

console.log(objectOne,objectTwo)
console.log(objectThree)
objectTwo.education.school.name = "APS"

console.log(objectOne,objectThree,objectTwo)
console.log("Fouth:",objectFour)

// Shallow vs Deep ??
console.log(typeof JSON.parse(JSON.stringify(objectOne)))