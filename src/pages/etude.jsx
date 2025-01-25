import React from "react";
import { useState } from "react";
import Modal from "../composants/modals";
function Etude(){
    const [lettres,setLettres] = useState([
        [{name:"R",selected:false},{name:"J",selected:false},{name:"E",selected:false},{name:"T",selected:false},{name:"C",selected:false},{name:"P",selected:false},{name:"P",selected:false},{name:"T",selected:false},{name:"C",selected:false},{name:"M",selected:false},{name:"X",selected:false},{name:"M",selected:false},{name:"O",selected:false}],//1
        [{name:"P",selected:false,found:false},{name:"O",selected:false,found:false},{name:"L",selected:false,found:false},{name:"Y",selected:false,found:false},{name:"T",selected:false,found:false},{name:"E",selected:false,found:false},{name:"C",selected:false,found:false},{name:"H",selected:false,found:false},{name:"N",selected:false,found:false},{name:"I",selected:false,found:false},{name:"Q",selected:false,found:false},{name:"U",selected:false,found:false},{name:"E",selected:false,found:false}],//2
        [{name:"Y",selected:false},{name:"L",selected:false},{name:"S",selected:false},{name:"A",selected:false},{name:"M",selected:false},{name:"H",selected:false},{name:"X",selected:false},{name:"Z",selected:false},{name:"U",selected:false},{name:"X",selected:false},{name:"A",selected:false},{name:"W",selected:false},{name:"M",selected:false}],//3
        [{name:"J",selected:false},{name:"E",selected:false},{name:"B",selected:false},{name:"S",selected:false},{name:"X",selected:false},{name:"O",selected:false},{name:"B",selected:false},{name:"P",selected:false},{name:"M",selected:false},{name:"D",selected:false},{name:"Z",selected:false},{name:"V",selected:false},{name:"E",selected:false}],//4
        [{name:"C",selected:false},{name:"W",selected:false},{name:"K",selected:false},{name:"S",selected:false},{name:"F",selected:false},{name:"X",selected:false},{name:"K",selected:false},{name:"P",selected:false},{name:"O",selected:false},{name:"R",selected:false},{name:"G",selected:false},{name:"P",selected:false},{name:"O",selected:false}],//5
        [{name:"Z",selected:false},{name:"C",selected:false},{name:"W",selected:false},{name:"J",selected:false},{name:"E",selected:false},{name:"I",selected:false},{name:"A",selected:false},{name:"S",selected:false},{name:"D",selected:false},{name:"X",selected:false},{name:"Z",selected:false},{name:"T",selected:false},{name:"G",selected:false}],//6
        [{name:"F",selected:false},{name:"S",selected:false},{name:"E",selected:false},{name:"F",selected:false},{name:"G",selected:false},{name:"C",selected:false},{name:"X",selected:false},{name:"W",selected:false},{name:"N",selected:false},{name:"E",selected:false},{name:"G",selected:false},{name:"S",selected:false},{name:"O",selected:false}],//7
        [{name:"Z",selected:false},{name:"U",selected:false},{name:"A",selected:false,found:false},{name:"M",selected:false,found:false},{name:"B",selected:false,found:false},{name:"I",selected:false,found:false},{name:"T",selected:false,found:false},{name:"I",selected:false,found:false},{name:"O",selected:false,found:false},{name:"N",selected:false,found:false},{name:"U",selected:false},{name:"W",selected:false},{name:"D",selected:false}],//8
        [{name:"P",selected:false},{name:"S",selected:false},{name:"Z",selected:false},{name:"N",selected:false},{name:"E",selected:false},{name:"S",selected:false},{name:"W",selected:false},{name:"K",selected:false},{name:"I",selected:false},{name:"T",selected:false},{name:"W",selected:false},{name:"U",selected:false},{name:"D",selected:false}],//9
        [{name:"F",selected:false},{name:"U",selected:false},{name:"V",selected:false},{name:"R",selected:false},{name:"N",selected:false},{name:"V",selected:false},{name:"I",selected:false},{name:"P",selected:false},{name:"P",selected:false},{name:"M",selected:false},{name:"W",selected:false},{name:"Z",selected:false},{name:"L",selected:false}],//10
        [{name:"U",selected:false},{name:"Y",selected:false},{name:"L",selected:false},{name:"R",selected:false},{name:"T",selected:false},{name:"J",selected:false},{name:"Q",selected:false},{name:"Z",selected:false},{name:"S",selected:false},{name:"K",selected:false},{name:"A",selected:false},{name:"Q",selected:false},{name:"V",selected:false}],//11
        [{name:"G",selected:false},{name:"K",selected:false},{name:"Q",selected:false},{name:"K",selected:false},{name:"D",selected:false},{name:"F",selected:false},{name:"I",selected:false},{name:"D",selected:false},{name:"F",selected:false},{name:"S",selected:false},{name:"W",selected:false},{name:"Y",selected:false},{name:"V",selected:false}],//12
    ]);
    const [positionMots,setPositionMots] = useState([{positions:[[1,0],[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10],[1,11],[1,12]] , trouver:false,name:"Polytechnique",fonction: ()=>{setShowPolyModal(true)}},{positions:[[7,2],[7,3],[7,4],[7,5],[7,6],[7,7],[7,8],[7,9]] , trouver:false,name:"Ambition",fonction: ()=>{setShowAmbitionModal(true)}}])
    const [motsTrouver, setMotTrouver] = useState(0);
    const [showPolyModal, setShowPolyModal] = useState(false);
    const [showAmbitionModal, setShowAmbitionModal] = useState(false);
    const selecting = (y,x)=>{
        let newArray = [...lettres]
        newArray[y][x] = {name:lettres[y][x].name, selected:!lettres[y][x].selected};
        setLettres(newArray);
        for(let x = 0; x < positionMots.length;x++){
            if(verifyWord(positionMots[x])){
                let newArray = [...positionMots]
                newArray[x] = {positions: positionMots[x].positions, trouver:true,name:positionMots[x].name};
                setPositionMots(newArray);
                motTrouverParUtilisateur(x);
                setMotTrouver(motsTrouver+1);
                positionMots[x].fonction()
            }
        }    
        return
    }
    const found = (x,y) =>{
        let newArray = [...lettres]
        newArray[y][x] = {name:lettres[y][x].name, selected:lettres[y][x].selected,found:true};
        setLettres(newArray);
    }
    const motTrouverParUtilisateur = (x)=>{
        for(let y = 0; y < positionMots[x].positions.length;y++){
            found(positionMots[x].positions[y][1],positionMots[x].positions[y][0])
        }
        return
    }
    const verifyWord = (words) =>{
        if(!words.trouver){
            for(let x = 0; x < words.positions.length;x++){
                if(!lettres[words.positions[x][0]][words.positions[x][1]].selected){
                    return false;
                }
            }
            return true;
        }
        return false
    }
    return(
        <div class="grid min-h-[90vh]">
            <div class="place-self-center"><h1 class="font-bold text-6xl">Étude</h1><h1 class="font-bold text-xl">Mots mêlés ({motsTrouver}/2)</h1></div>
            <div class=" h-[31rem]">
                <div class="place-self-center bg-white h-[31rem] ring-6 w-[31rem] rounded-xl grid grid-rows-12 p-1">
                    {
                        lettres.map((row,y)=>
                            <div class="w-full grid grid-cols-13 p-1 gap-2">
                                {
                                    row.map((lettre,x)=>
                                        <div>{
                                            lettre.found ? 
                                            <div><button class=" w-full  grid"  ><h1 class="place-self-center font-bold text-2xl text-green-500">{lettre.name}</h1></button></div>
                                            :
                                            <div>{lettre.selected ? <button class=" w-full  grid ring-3 rounded ring-blue-500" onClick={()=>{selecting(y,x)}} ><h1 class="place-self-center font-bold text-2xl">{lettre.name}</h1></button>: <button class=" w-full  grid" onClick={()=>{selecting(y,x)}} ><h1 class="place-self-center font-bold text-2xl">{lettre.name}</h1></button>  }</div>
                                    
                                        }</div>  
                                    )
                                }
                            </div>
                        )
                    }
                </div>
            </div>
            <div class=" mb-16 grid grid-cols-2 place-self-center w-[32rem]">
                {positionMots.map((mot)=>
                    <div class="place-self-center">
                        {mot.trouver ?<h1 class="text-2xl font-bold line-through">{mot.name}</h1> : <h1 class="text-2xl font-bold">{mot.name}</h1> }
                    </div>
                )}          
            </div>
            <Modal isVisible={showPolyModal} onClose={() => setShowPolyModal(false)}>
              <h1 class="font-bold tracking-wider text-5xl mb-2 w-full text-black text-center mt-5">
                Polytechnique
              </h1>     
              <h1 class=" tracking-wider text-xl mb-6 w-[90%] text-black text-justify mt-10 ml-[5%]">
              Je poursuis actuellement un baccalauréat en génie logiciel à Polytechnique Montréal, un programme exigeant qui me permet de développer une solide expertise en conception et développement de logiciels. À travers mes études, j’acquiers des compétences techniques approfondies en langages de programmation tels que C++, Assembly et Python. Ce programme met également l’accent sur la gestion de projets, la résolution de problèmes complexes et l’optimisation des performances logicielles. En parallèle, j’affine des compétences essentielles telles que le travail d’équipe, la rigueur et la capacité à prendre des décisions éclairées sous pression, des qualités que je renforce grâce à mon implication dans divers comités et projets académiques.
              </h1>           
            </Modal>
            <Modal isVisible={showAmbitionModal} onClose={() => setShowAmbitionModal(false)}>
              <h1 class="font-bold tracking-wider text-5xl mb-2 w-full text-black text-center mt-5">
                Ambition
              </h1>  
              <h1 class=" tracking-wider text-xl mb-6 w-[90%] text-black text-justify mt-10 ml-[5%]">
              J’envisage poursuivre mes études avec une maîtrise en génie ou un MBA, dans le but d’approfondir mes connaissances techniques ou de développer mes compétences en gestion et en stratégie d’affaires. Ayant toujours eu un penchant pour l’entrepreneuriat, je souhaite combiner mes compétences en génie logiciel avec une vision d’affaires solide afin de créer des solutions innovantes et impactantes. Ces études avancées me permettraient d’acquérir les outils nécessaires pour concrétiser mes ambitions entrepreneuriales et contribuer activement au développement de projets novateurs.
              </h1>              
            </Modal>
        </div>
    )
}
export default Etude;