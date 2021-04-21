
// Object Destructuring

let human ={
    eyes:2,
    nose:1,
    hands:2,
    legs:2,
    internalOrgans:{
        heart:1
    }
}

console.log(human.eyes)
console.log(human.hands)

const { mouth, hands, nose,internalOrgans:{heart},eyes} = human

console.log(mouth)
console.log(eyes)
console.log(heart)

let studentOne ={
    firstName:"Harshavardhana",
    lastName:"Gowda",
    designation: "Full Stack - MERN",
    getNameReg(a,b,c){
        console.log(a,b,c)
        return `${this.firstName} ${this.lastName}`
    }
}

let studentTwo ={
    firstName:"Abhishek",
    lastName:"Kumar",
    designation: "Full Stack - MERN",
    getNameArr: () => {
        return `${this.firstName} ${this.lastName}`
    }
}

let studentThree = {
    firstName:"Shubham",
    lastName:"Soni"
}

console.log(studentOne.getNameReg())
console.log(studentTwo.getNameArr())

// Change context using call
console.log(studentOne.getNameReg.call(studentThree,"a","b","c"))

// Change context using apply
console.log(studentOne.getNameReg.apply(studentThree,["a","b","c"]))

// Change context using bind
const getNameForStudentThree = studentOne.getNameReg.bind(studentThree)
console.log(getNameForStudentThree("a","b","c"))



