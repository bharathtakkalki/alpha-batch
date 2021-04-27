class Calculator{
    constructor(){
        this.numOne = ""
        this.numTwo = ""
        this.result = ""
        this.prevResult = ""
        this.operation = ""
    }
    add(){
        this.result = parseInt(this.numOne) + parseInt(this.numTwo)
    }
    subtract(){
        this.result = this.numOne - this.numTwo
    }
    setNumOne(value){
        this.numOne += value
    }
    setNumTwo(value){
        this.numTwo += value
    }
    setOperation(operation){
        this.operation = operation
    }
}

const SignObject = {
    ADD:"+",
    SUBTRACT:"-",
    MULTIPLY:"x",
    DIVIDE:"÷"
}




const calculator = new Calculator()



const updateMainDisplay = () =>{
    const main = document.getElementById("main-display")
    main.innerText =  calculator.operation ? (calculator.numTwo ? calculator.numTwo : 0) : calculator.numOne
   
}

const updateSecondaryDisplay = () =>{
    const secondary = document.getElementById("secondary-display")
    secondary.innerHTML = ` ${calculator.numOne} <span class="operand">${SignObject[calculator.operation] ? SignObject[calculator.operation] : ""}</span> ${calculator.numTwo}`

}
const numKeyClickHandler = (num) =>{
    if(calculator.operation){  
        calculator.setNumTwo(num)
    }else{
        calculator.setNumOne(num)
    }
    updateMainDisplay()
    updateSecondaryDisplay()
    console.log(calculator.numOne)
}

const operandKeyClickHandler = (operation) =>{
    calculator.setOperation(operation)
    updateMainDisplay()
    updateSecondaryDisplay()
}

const resultClickHandler = () =>{
    switch (calculator.operation) {
        case "ADD":
            calculator.add()
            break;
        case "SUBTRACT":
            calculator.subtract()
            break;
        default:
            break;
    }
    const main = document.getElementById("main-display")
    main.innerText = calculator.result
}

