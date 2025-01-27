import prochainePosition from "./prochainePosition"

export const verifyAnybodyWin=(board)=>{
    if(verifyWin(board,"X")){
        return -100
    }else if(verifyWin(board,"O")){
        return 10
    }
    return 100
}
const verifyWin=(board,index)=>{
    const winPosition = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,4,8],[2,4,6],
        [0,3,6],[1,4,7],[2,5,8]
    ]
    for(let x=0;x<winPosition.length;x++){
        for(let i=0;i<3;i++){
            if(board[winPosition[x][i]].valeur==undefined){
                break
            }else if(board[winPosition[x][i]].valeur!=index){
                break
            }else if(i==2){
                return true
            }
        }
    }return false
}
export const boardFull =(board)=>{
    for(let x=0; x<9;x++){
        if(board[x].valeur == undefined){
            return false
        }
    }
    return true
}

let placement = async (board,index)=>{
    let nextMove = 0
    for(let x=0;x<9;x++){
        if(board[x].valeur == undefined){
            let newBoard = [...board];
            newBoard[x] = {valeur:index};
            if(verifyAnybodyWin(newBoard)==100 && !boardFull(newBoard)){
                let newIndex =  index==="O"? "X":"O"
                nextMove+=await prochainePosition(newBoard,newIndex);   
            }else{
                nextMove += verifyAnybodyWin(newBoard) *100
            }
        }
    }
    return nextMove
}
const findBestMove = async (board) => {
    const nextMove = [undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined]
    if(!boardFull(board)){
        for(let x=0; x<9;x++){
            if(board[x].valeur == undefined){
                let newBoard = [...board];
                newBoard[x] = {valeur:"O"};
                if(verifyAnybodyWin(newBoard)==10){
                    nextMove[x] =1000000
                    continue
                }else{
                    if(nextMove[x] == undefined){
                        nextMove[x] = 0
                    }
                    nextMove[x] += await placement(newBoard, "X");
                    newBoard[x].valeur =undefined
                }
            }else{
                continue
            }
        }
    }else{
        return false
    }
    let highestScore = -Infinity;
    let indexScore = -1;
    for(let c=0;c<9;c++){
        if(nextMove[c]!=undefined &&nextMove[c]>highestScore){
            console.log(nextMove)
            highestScore = nextMove[c]
            indexScore = c
        }
    }
    return indexScore
};


export default findBestMove;