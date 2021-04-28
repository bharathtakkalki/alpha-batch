class Calculator{
    constructor(){
        this.numOne = ""
        this.numTwo = ""
        this.result = ""
        this.prevResult = ""
        this.operation = ""
    }
    add(){
        this.result = Number(this.numOne) + Number(this.numTwo)
    }
    subtract(){
        this.result =  Number(this.numOne) -  Number(this.numTwo)
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
    clearCalculator(){
        this.numOne = ""
        this.numTwo = ""
        this.result = ""
        this.prevResult = ""
        this.operation = ""
    }
    changeSign(forNumOne){
        if(forNumOne){
            this.numOne = String(Number(this.numOne) * -1)
            return
        }
        this.numTwo =  String(Number(this.numTwo) * -1)
    }
    undo(forNumOne){
        if(forNumOne){
            this.numOne =  this.numOne.substring(0,(this.numOne.length-1))
            return;
        }
        this.numTwo =  this.numTwo.substring(0,(this.numTwo.length-1))

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
    main.innerText =  calculator.operation ? (calculator.numTwo || 0) : (calculator.numOne || 0)
   
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

const actionKeyClickHandler = (action) => {
    switch (action) {
        case "CLEAR_ALL":
            calculator.clearCalculator()
            break;
        case "CHANGE_SIGN":
            calculator.changeSign(calculator.operation ? false : true)
            break;
        default:
            break;
    }
    updateMainDisplay()
    updateSecondaryDisplay()
}

const undoClickHandler = () =>{
    calculator.undo(calculator.operation ? false : true)
    updateMainDisplay()
    updateSecondaryDisplay()
}
