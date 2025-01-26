import React from "react"
import { useState } from "react"
import Modal from "../composants/modals"
function Emplois(){
    const [response,setReponse] = useState(["","","","","","","","",""])
    const [showEmploiModal,setShowEmploiModal] = useState(false)
    const [choix,setChoix] = useState([
        [{name:"A",selected:false},{name:"J",selected:false},{name:"K",selected:false},{name:"Z",selected:false}],
        [{name:"E",selected:false},{name:"T",selected:false},{name:"E",selected:false},{name:"U",selected:false}],
        [{name:"S",selected:false},{name:"F",selected:false},{name:"V",selected:false},{name:"I",selected:false}],
        [{name:"D",selected:false},{name:"U",selected:false},{name:"F",selected:false},{name:"R",selected:false}],
    ])
    const [correct,setCorrect] = useState(false)
    const selection=(y,x)=>{
        let Array = [...response]
        for(let w=0; w<response.length;w++){
            if(response[w]==""){
                Array[w] = choix[y][x].name;
                setReponse(Array);
                let newArray = [...choix]
                newArray[y][x] = {name:choix[y][x].name, selected:!choix[y][x].selected};
                setChoix(newArray);
                if(w==response.length-1){
                    verify(Array)
                }
                break
            }
        }
    }
    const verify=(Array)=>{
        if(JSON.stringify(Array)==JSON.stringify(["S","A","U","V","E","T","E","U","R"])){
            console.log(Array)
            setCorrect(true)
            setShowEmploiModal(true)
        }
    }
    const effacer=()=>{
        setReponse(["","","","","","","","",""])
        setChoix([
            [{name:"A",selected:false},{name:"J",selected:false},{name:"K",selected:false},{name:"Z",selected:false}],
            [{name:"E",selected:false},{name:"T",selected:false},{name:"E",selected:false},{name:"U",selected:false}],
            [{name:"S",selected:false},{name:"F",selected:false},{name:"V",selected:false},{name:"I",selected:false}],
            [{name:"D",selected:false},{name:"U",selected:false},{name:"F",selected:false},{name:"R",selected:false}],
        ])
        setCorrect(false)
    }
    return(
        <div class="grid min-h-[90vh]">
            <div class="place-self-center"><h1 class="font-bold text-6xl text-center">Emplois</h1><h1 class="font-bold text-xl">Ruzzle!</h1></div>
            <div class="h-[60vh]  grid grid-rows-2">
                <div class="place-self-center h-16 w-[32rem] grid grid-cols-9">
                    <div class=" col-span-7 grid grid-cols-9">
                        {
                            response.map((lettre)=>
                                <div class="border-b-4 place-self-center text-4xl font-bold w-[80%] text-center h-[70%]">
                                    {
                                        correct?
                                        <h1 class="text-green-400">
                                        {lettre}
                                        </h1>
                                        :
                                        <h1>
                                        {lettre}
                                        </h1>
                                    }
                                </div>
                            )
                        }
                    </div>
                    <div class=" col-span-2 grid">
                        <button class="place-self-center h-[90%] w-[80%] bg-red-300 rounded-xl text-xl font-bold" onClick={()=>{effacer()}}>Effacer</button>
                    </div>
                </div>
                <h1 class="place-self-center mb-16">Indice: il s'agit d'un job d'été qui requière des connaissances en premiers soins</h1>
                <div class=" w-[24rem] place-self-center h-[40vh] grid grid-rows-5">
                    {
                        choix.map((rows,y)=>
                            <div class="grid grid-cols-4 justify-between">
                                {
                                    rows.map((lettre,x)=>
                                        <div>
                                        {
                                            lettre.selected? 
                                            <div class="place-self-center h-[70%] w-[50%] ring-3 bg-gray-400 mt-6  grid rounded"> 
                                                <h1 class="place-self-center text-4xl">{lettre.name}</h1>
                                            </div>
                                            :
                                            <div class="place-self-center h-[70%] w-[50%] ring-3 mt-6  grid rounded" onClick={()=>{selection(y,x)}}> 
                                                <h1 class="place-self-center text-4xl">{lettre.name}</h1>
                                            </div>
                                        }
                                        </div>
                                    )
                                }
                            </div>
                        )
                    }
                    
                </div>
            </div>
            <Modal isVisible={showEmploiModal} onClose={() => setShowEmploiModal(false)}>
              <h1 class="font-bold tracking-wider text-5xl mb-2 w-full text-black text-center mt-5">
                Emplois
              </h1>  
              <h1 class=" tracking-wider text-xl mb-6 w-[90%] text-black text-justify mt-10 ml-[5%]">
              J'ai eu la chance de travailler à la ville de Longueuil comme sauveteur pour 3 années consécutive ce qui m'a menner à postuler pour devenir chef de piscine à ma dernière année. J'ai grandement apprécier cette position qui ma permis de dévellopper mon leadership, mon habilleté à travailler en équipe et ma résiliance face a un environement stressant en continuel évolution. Je suis très heureux de pouvoir affirmer que ses qualités me suiveront toute ma vie.
              </h1>              
            </Modal>
        </div>
    )
}
export default Emplois