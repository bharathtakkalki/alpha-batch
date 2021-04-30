class TicTacToe{
    constructor(){
        this.playCells = Array(3).fill().map(() => new Array(3).fill(0))
        this.playerX = true;
        this.playerO = false;
        this.playerXName ="Player-X"
        this.playerOName ="Player-O"
        this.count = 0
    }
}

const ticTacToe =  new TicTacToe()

console.log(ticTacToe.playCells)

const updateTurnDisplay = () =>{
    const turnDisplay = document.getElementsByClassName("turn-display")[0]
    turnDisplay.innerText = `${ticTacToe.playerX ?  ticTacToe.playerXName : ticTacToe.playerOName} its your turn!`
}

const cellClickHandler = (row,column,index) =>{
    if(ticTacToe.playCells[row][column] !== 0) return; 
    const playCell = document.getElementsByClassName("play-cells")[index]
    const updatedClassName =  ticTacToe.playerX ? "x-cell" :"o-cell"
    playCell.classList.add(updatedClassName,"flip-animate")
    playCell.innerText = ticTacToe.playerX ? "X" : "O"
    ticTacToe.playCells[row][column] = ticTacToe.playerX ? "X" : "O"
    ticTacToe.playerX = !ticTacToe.playerX
    ticTacToe.count += 1
    if(ticTacToe.count >= 5) checkResult()
    updateTurnDisplay()

}
listX = [1,5,7]
winningCondition=[[1,5,7],[]]
listX.includes(5)

const listX = []
const listO = []

const checkResult = () =>{
    const currPlayerValue = ticTacToe.playerX ? "X" : "O"
    // for(let i = 0;i<3;i++){
    //     let x=0 , y=0
    //     for(let j=0;j<3;j++){
    //         ticTacToe.playCells[i][j] === "X" ? x++ : y++ 

    //     }
    //     if(x===3){
    //        return x  
    //     }
    // }
}

const checkHorizontal = () =>{

}





// Naveen is the Winner