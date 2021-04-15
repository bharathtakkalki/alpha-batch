// LOOPS


var students = ["Avinash","Sameer","Prameet","Nakul","Abhishek","Pratik"];

var designation = ["Full Stack","Frontend","Backend","Devops","Designer","Architect"]

// var studentsDesign = ["Avinash-Full Stack"]

// Adds Element at the End
students.push("Sayani")

//Adds element at the beginning 
students.unshift("Sachin")

// Remove last Element
students.pop()

// Remove first element
students.shift()

// Remove from one index
students.splice(1,1)
// Adding at a specific place
students.splice(1,1, "Manikantha")

// delete students[2]

console.log(students)

console.log(students.slice(0,2))

var student = {
    firstName:"Amrit",
    lastName:"Anand",
    institution:"Newton School",
    designation:"Full Stack Engineer",
    getFullName:function(){
        return this.firstName +" "+ this.lastName
    }
}

delete student["designation"]
// console.log(students[0])
// console.log(students[1])
console.log(student.getFullName())
console.log(student instanceof Array,typeof student)
console.log(students instanceof Array,typeof students)
for(key in student){
    console.log(student[key])
}

var i = 0;
for(i; i<students.length; i++){
    console.log(i,students.length)
    console.log(students[i])
}
for(let value of students){
    console.log(value)
}

students.forEach(function(value,index){
    console.log("Index",index)
    console.log("Student",value)
})

console.log("For Each",students.forEach(function(student,index){
    console.log(index)
    console.log(student)
}))
var i =0
var str ="";

while(i<10){
    str +=" print"
    i++
}
console.log(str)

i = 0;
while(i<students.length){
    console.log(students[i])
    i++
}

i = 10;

do{
    console.log("Im Executed Atleast Once")
    i++
}while(i<students.length)

var studentsDesign = students.map(function(value,index){
    return value +"-"+"Newton School"
})

console.log(students.join("--"))

console.log("Map",studentsDesign)

// Functions in Javascript
// First name + designation ==> Name: "name", Designation: "designation"

var newStudent =  createStudentObject(students[0],designation[0])
console.log(newStudent)

function createStudentObject (name,designation){
    return {
        name:name,
        designation:designation
    }
}

const createObjectArrowFunc = (name,designation) => {
    return {
        name:name,
        designation:designation
    }
}

const anonymously = function(){
 console.log("I was created using anonymously")
}

console.log(createObjectArrowFunc(students[1],designation[1]));

(function(){
    console.log("Im Immediately Invoked Function")
})()
// Scopes, Closure , Hoisting 


// Let <> Const <> Var
