import {verifyAnybodyWin,boardFull} from "./trouverMeilleursMove"
async function prochainePosition(board,index){
    let nextMove = 0
    for(let x=0;x<9;x++){
        if(board[x].valeur == undefined){
            let newBoard = [...board];
            newBoard[x] = {valeur:index};
            if(verifyAnybodyWin(newBoard)==100 && !boardFull(newBoard)){
                let newIndex =  index==="O"? "X":"O"
                nextMove+=await prochainePosition(newBoard,newIndex);   
            }else{
                nextMove += verifyAnybodyWin(newBoard)
            }
        }
    }
    return nextMove
}
export default prochainePosition