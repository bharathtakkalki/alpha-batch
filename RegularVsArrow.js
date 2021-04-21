/*
// Loosely Typed & Dynamic Typed 
() => {} function(){

}
*/

// 1.Syntax
// Regular
function name(){
    // Statements
}

// Arrow 
const newName = () =>{
    // Statements 
}


// 2. Arguments Binding

// Regular Declaration
function argumentBindingReg(){
    console.log(arguments)
}

// Assigning arrow function to a variable
const argumentBindingArr = (one,two, three) => {
    // No arguments binding
    console.log(one,two, three)
}

argumentBindingReg(1,2,3,4,5)
argumentBindingArr(1,2,3,4,5) 

// 3. "this" Binding
let key = "value"
let studentOne ={
    firstName:"Harshavardhana",
    lastName:"Gowda",
    designation: "Full Stack - MERN",
    key,
    getNameReg(){
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
const getName = () => this.firstName

console.log(studentOne.getNameReg())
// Reference of "this" Keyword is not known
console.log(studentTwo.getNameArr())


// 4. Using as Constructor Function
function createStudent (firstName,lastName){
    this.firstName = firstName
    this.lastName = lastName
}

const newStudent = new createStudent("Nishant","Kodambal")
console.log(newStudent)

const createStudentArr = (firstName,lastName) =>{
    this.firstName = firstName
    this.lastName = lastName
}

// Arrow Function not a constructor Method
// const newStudentTwo = new createStudentArr()

// 5.Duplicate Parameters 

// Regular function
function duplicateParamsReg(x,x) {
    console.log(x,x)
}

// Arrow Function
// const duplicateParamsArr = (x,x) =>{
//     console.log(x,x)

// }

duplicateParamsReg(1,2)

// Return value 
function addNumReg(x,y){
    return x+y;
}

const addNumArr = (x,y) => x+y 

console.log(addNumReg(4,5))
console.log(addNumArr(6,10))

function stringManipulation(){ // String or Number
    if(typeof arguments[0] === "string"){

    }
    if(typeof arguments[0] === "number"){

    }
    for(let i=0;i<arguments.length;i++) {
        console.log(arguments[i])
    }
}

stringManipulation(1,2,3,4,5,6,7,7,8,8)

// async , await & Promise