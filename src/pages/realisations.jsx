import React from "react"
import { useState,useEffect } from "react"
import Modal from "../composants/modals"
function Realisations(){
    const [cartes,setCartes] = useState([{},{},{},{},{},{},{},{},{},{}])
    const [selected, setSelected] = useState(undefined)
    const [showRealisationsModal,setShowRealisationsModal] = useState(false)
    const shuffle = (array) => { 
        for (let i = array.length - 1; i > 0; i--) { 
          const j = Math.floor(Math.random() * (i + 1)); 
          [array[i], array[j]] = [array[j], array[i]]; 
        } 
        return array; 
    }; 
    useEffect(()=>{
        const myArray = [
            {name:"sport",selected:false,trouver:false,},
            {name:"sport",selected:false,trouver:false},
            {name:"president",selected:false,trouver:false},
            {name:"president",selected:false,trouver:false},
            {name:"tuteur",selected:false,trouver:false},
            {name:"tuteur",selected:false,trouver:false},
            {name:"polybroue",selected:false,trouver:false},
            {name:"polybroue",selected:false,trouver:false},
            {name:"projet",selected:false,trouver:false},
            {name:"projet",selected:false,trouver:false}
        ]; 
        setCartes(shuffle(myArray)); 
    }, []) 
    const selection=(index)=>{
        if(selected==undefined){
            let newArray = [...cartes]
            newArray[index] = {name:cartes[index].name,selected:true,trouver:false};
            setCartes(newArray);
            setSelected(index)
            return
        }else{
            if(cartes[index].name == cartes[selected].name){
                let newArray = [...cartes]
                newArray[index] = {name:cartes[index].name,selected:false,trouver:true};
                newArray[selected] = {name:cartes[selected].name,selected:false,trouver:true};
                setSelected(undefined);
                setCartes(newArray);
                if(Object.values(newArray).every(carte => carte.trouver === true)){
                    setShowRealisationsModal(true)
                }
            }else{
                let newArray = [...cartes]
                newArray[index] = {name:cartes[index].name,selected:true,trouver:false};
                newArray[selected] = {name:cartes[selected].name,selected:false,trouver:false};
                setCartes(newArray);
                setSelected(index);
            }
        }
    }
    return(
        <div class="grid min-h-[90vh]">
            <div class="place-self-center"><h1 class="font-bold text-6xl">Réalisations</h1><h1 class="font-bold text-xl">Trouvez les pairs!</h1></div>
            <div class="w-[24rem] h-[70vh] place-self-center grid grid-cols-2">
                {
                    cartes.map((carte,index)=>
                    <div class="place-self-center grid ">
                        {
                            carte.trouver ?
                            <div>
                                <div class="place-self-center ring-4 h-30 w-32 rounded text-center hover:ring-blue-400 grid">
                                    <h1 class="place-self-center text-2xl font-bold ">{carte.name}</h1>
                                </div>  
                            </div>
                            :
                            <div>
                                {
                                    !carte.selected?
                                    <div class="place-self-center ring-4 h-30 w-32 rounded text-center hover:ring-blue-400 grid" onClick={()=>{selection(index)}}>
                                        <h1 class="place-self-center text-3xl font-bold ">CV Fabelair</h1>
                                    </div>  
                                    :
                                    <div class="place-self-center ring-4 h-30 w-32 rounded text-center hover:ring-blue-400 grid">
                                        <h1 class="place-self-center text-2xl font-bold ">{carte.name}</h1>
                                    </div>              
                                }
                            </div>
                        }
                    </div>
                )}
            </div>
            <Modal isVisible={showRealisationsModal} onClose={() => setShowRealisationsModal(false)}>
              <h1 class="font-bold tracking-wider text-5xl mb-2 w-full text-black text-center mt-5">
                Réalisations
              </h1>  
              <h1 class=" tracking-wider text-xl mb-6 w-[90%] text-black text-justify mt-10 ml-[5%]">
              Mon parcours académique est enrichi par des réalisations significatives qui témoignent de mon engagement et de mon leadership. Au sein du collégial International Sainte-Anne, j'ai été membre actif de plusieurs équipes sportives, dont le cross-country, le hockey-balle et l'Ultimate, démontrant mon esprit d'équipe et ma détermination. J'ai également assumé le rôle de président du comité socio-culturel et de tuteur en mathématiques, des responsabilités qui ont développé mes compétences en gestion et en accompagnement. Poursuivant mon parcours à Polytechnique Montréal, je suis désormais membre du comité Polybroue, continuant ainsi à m'impliquer activement dans des projets stimulants. </h1>              
            </Modal>
        </div>
    )
}

export default Realisations