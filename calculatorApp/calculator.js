class Calculator{
    constructor(){
        this.numArr = []
        this.currentNum = ""
        this.result = ""
        this.prevResult = ""
        this.operation = []
    }
    add(numOne,numTwo){
        return Number(numOne) + Number(numTwo)
    }
    subtract(numOne,numTwo){
        return Number(numOne) -  Number(numTwo)
    }
    setCurrentNum(value){
        this.currentNum += value
    }
    clearCurrentNum(){
        this.numArr.push(this.currentNum) 
        this.currentNum = ""
    }
    setOperation(operation){
        this.operation.push(operation)
        this.numArr.push(this.currentNum)
        this.currentNum = ""
    }
    clearCalculator(){
        this.numArr = []
        this.currentNum = ""
        this.result = ""
        this.prevResult = ""
        this.operation = []
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
    main.innerText =  calculator.currentNum || 0
   
}

const updateSecondaryDisplay = () =>{
    const secondary = document.getElementById("secondary-display")
    const newNumArr = [...calculator.numArr]
    const newOperation = [...calculator.operation]
    let innerHTML = ""
    while(newNumArr.length !== 0){
        const num = newNumArr.shift()
        const operation = newOperation.shift()
        innerHTML += `${num} <span class="operand">${SignObject[operation] ? SignObject[operation] : ""}</span>`
    }
    secondary.innerHTML = innerHTML
} 
const numKeyClickHandler = (num) =>{
    calculator.setCurrentNum(num)
    updateMainDisplay()
    updateSecondaryDisplay()
}

const operandKeyClickHandler = (operation) =>{
    calculator.setOperation(operation)
    updateMainDisplay()
    updateSecondaryDisplay()
}

const resultClickHandler = () =>{
    calculator.clearCurrentNum()
    const newNumArr = [...calculator.numArr]
    const newOperation = [...calculator.operation]
    // TODO: Move logic to class as result method
    while(newNumArr.length !== 1){
        const numOne = newNumArr.shift()
        const numTwo = newNumArr.shift()
        const operation = newOperation.shift()

        switch (operation) {
            case "ADD":
                newNumArr.unshift(calculator.add(numOne,numTwo))
                break;
            case "SUBTRACT":
                newNumArr.unshift(calculator.subtract(numOne,numTwo))
                break;
            default:
                break;
        }
    }
    updateSecondaryDisplay()
    const main = document.getElementById("main-display")
    main.innerText = newNumArr[0]
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
