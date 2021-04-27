export class Calculator{
    constructor(){
        this.numOne = 0
        this.numTwo = 0
        this.result = 0
        this.prevResult = 0
        this.operation = ""
    }
    add(){
        this.result = this.numOne + this.numTwo
    }
    subtract(){
        this.result = this.numOne - this.numTwo
    }
}
