import React, { useState } from "react"
import findBestMove, { verifyAnybodyWin,boardFull } from '../fonctions/trouverMeilleursMove';
import Modal from "../composants/modals";
function Loisirs(){

    const [positions,setPositions] = useState(Array(9).fill({ valeur: undefined }));
    const [turnPlayer,setTurnPlayer] = useState(true)
    const [showLoisirsModal,setShowLoisirsModal] = useState(false)
    const [fini,setFini] = useState(false)
    const [victoire,setVictoire] = useState("V")
    const restart=()=>{
        setTurnPlayer(true)
        setPositions(Array(9).fill({ valeur: undefined }))
        setFini(false)
    }
    function timeout(delay) {
        return new Promise( res => setTimeout(res, delay) );
    }
    const selection=(index)=>{
        if(positions[index].valeur == undefined && turnPlayer && !fini){
            let newArray = [...positions]
            newArray[index] = {valeur:"X"};
            setPositions(newArray);
            if(verifyAnybodyWin(newArray) ==100 && !boardFull(newArray)){
                setTurnPlayer(false);
                SiteWebTurn(newArray);
            }else{
                setFini(true)
                if(verifyAnybodyWin(newArray) ==100){
                    setVictoire("E")
                }else if(verifyAnybodyWin(newArray) ==-100){
                    setVictoire("V")
                }else if(verifyAnybodyWin(newArray) ==10){
                    setVictoire("P")
                }
                setShowLoisirsModal(true)
            }
        }
    }
    const SiteWebTurn=async(board)=>{
        await timeout(500);
        const nextMove = await findBestMove(board);
        let newArray = [...board]
        newArray[nextMove] = {valeur:"O"};
        setPositions(newArray);
        if(verifyAnybodyWin(newArray) ==100 && !boardFull(newArray)){
            setTurnPlayer(true);
        }else{
            setFini(true)
            if(verifyAnybodyWin(newArray) ==100){
                setVictoire("E")
            }else if(verifyAnybodyWin(newArray) ==-100){
                setVictoire("V")
            }else if(verifyAnybodyWin(newArray) ==10){
                setVictoire("P")
            }
            setShowLoisirsModal(true)
        }
    }
    return(
        <div class="grid min-h-[90vh]">
            <div class="place-self-center text-center mt-10"><h1 class="font-bold text-6xl">Loisirs</h1><h1 class="font-bold text-xl">Tic Tac Toe</h1></div>
            {
                turnPlayer && !fini?
                <div class="place-self-center w-[32rem] h-[15vh] grid grid-cols-3">
                    <div class="place-self-center h-12 w-24 ring-2 rounded  text-xl text-center grid font-bold"><div class="place-self-center">Player</div></div>
                    <div class="place-self-center h-12 w-24 rounded bg-red-400 text-xl text-center grid font-bold" onClick={()=>{restart()}}><div class="place-self-center">Restart</div></div>
                    <div class="place-self-center h-12 w-24 rounded font-bold text-xl text-center grid"><div class="place-self-center">SiteWeb</div></div>
                </div>
                :
                <div class="place-self-center w-[32rem] h-[15vh] grid grid-cols-3">
                    <div class="place-self-center h-12 w-24 rounded  text-xl text-center grid font-bold"><div class="place-self-center">Player</div></div>
                    <div class="place-self-center h-12 w-24 rounded bg-red-400 text-xl text-center grid font-bold" onClick={()=>{restart()}}><div class="place-self-center">Restart</div></div>
                    <div class="place-self-center h-12 w-24 ring-2 rounded font-bold text-xl text-center grid"><div class="place-self-center">SiteWeb</div></div>
                </div>
            }
            <div class="place-self-center w-[32rem] h-[60vh]">
                <div class="grid grid-cols-3 w-[32rem] h-[32rem] place-self-center">
                    {
                        positions.map((position,index)=>
                            <div onClick={()=>{selection(index)}} key={index} className={` flex items-center justify-center text-4xl font-bold  ${index < 6 ? 'border-b-2' : ''} ${index % 3 !== 2 ? 'border-r-2' : ''} border-gray-500`}>
                                {
                                    position.valeur?
                                    <div class="place-self-center h-[8rem] w-[9rem] rounded-xl grid"><h1 class="text-4xl font-bold place-self-center">{position.valeur}</h1></div>
                                    :
                                    <div class="place-self-center h-[8rem] hover:ring-4 hover:ring-blue-400 w-[9rem] rounded-xl grid"><h1 class="text-4xl font-bold place-self-center"></h1></div>
                                }
                            </div>
                        )
                    }
                <div class="flex items-center justify-center text-4xl font-bold"></div>
                </div>
            </div>
            <Modal isVisible={showLoisirsModal} onClose={() => setShowLoisirsModal(false)}>
              <h1 class="font-bold tracking-wider text-5xl mb-2 w-full text-black text-center mt-5">
                {victoire == "V" && "Victoire!"}
                {victoire == "E" && "Égalité"}
                {victoire == "P" && "Perdu"}
              </h1>  
              <h1 class=" tracking-wider text-xl mb-6 w-[90%] text-black text-justify mt-10 ml-[5%]">
              En dehors de mon parcours académique et professionnel, mes loisirs occupent une place importante dans mon développement personnel. Que ce soit à travers le sauvetage sportif, la musique, les voyages ou la programmation informatique, je cherche constamment à me dépasser et à acquérir de nouvelles compétences. Le sauvetage sportif m’a appris la discipline, la gestion du stress et l’importance du travail d’équipe, tandis que la musique et les voyages me permettent d’explorer ma créativité et d’élargir ma vision du monde. La programmation, quant à elle, est une passion qui me pousse à innover et à résoudre des problèmes de manière analytique, renforçant ainsi mon esprit logique et ma persévérance.
              </h1>              
            </Modal>
        </div>
    )
}

export default Loisirs