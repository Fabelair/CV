import React, { useState } from "react";
import Modal from "../composants/modals";
function Engagements(){
    const [cases,setCases] = useState([ //17 de largex16 de hauteur
        [{show:false},{show:false},{show:false},{show:false},{show:false},{show:false},{show:false},{show:false},{show:false},{show:true,taged:true,number:"1",value:""},{show:false},{show:false},{show:false},{show:false},{show:false},{show:false},{show:true,taged:true,number:"2",value:""},],
        [{show:false},{show:false},{show:false},{show:false},{show:false},{show:false},{show:false},{show:false},{show:false},{show:true,value:""},{show:false},{show:false},{show:false},{show:false},{show:true,taged:true,number:"3",value:""},{show:false},{show:true,value:""},],
        [{show:false},{show:false},{show:false},{show:false},{show:false},{show:false},{show:false},{show:false},{show:false},{show:true,value:""},{show:false},{show:false},{show:false},{show:false},{show:true,value:""},{show:false},{show:true,value:""},],
        [{show:false},{show:false},{show:false},{show:false},{show:false},{show:false},{show:false},{show:false},{show:false},{show:true,value:""},{show:false},{show:false},{show:false},{show:false},{show:true,value:""},{show:false},{show:true,value:""},],
        [{show:false},{show:false},{show:false},{show:false},{show:false},{show:false},{show:false},{show:false},{show:false},{show:true,value:""},{show:false},{show:false},{show:false},{show:false},{show:true,value:""},{show:false},{show:true,value:""},],
        [{show:false},{show:false},{show:false},{show:false},{show:false},{show:false},{show:false},{show:false},{show:false},{show:true,value:""},{show:false},{show:false},{show:false},{show:false},{show:true,value:""},{show:false},{show:true,value:""},],
        [{show:false},{show:false},{show:false},{show:false},{show:false},{show:false},{show:false},{show:false},{show:false},{show:true,value:""},{show:false},{show:false},{show:false},{show:false},{show:true,value:""},{show:false},{show:true,value:""},],
        [{show:false},{show:false},{show:false},{show:false},{show:false},{show:false},{show:false},{show:false},{show:false},{show:true,value:""},{show:false},{show:false},{show:false},{show:false},{show:true,value:""},{show:false},{show:true,value:""},],
        [{show:false},{show:false},{show:false},{show:false},{show:false},{show:false},{show:false},{show:false},{show:true,taged:true,number:"4",value:""},{show:true,value:""},{show:true,value:""},{show:true,value:""},{show:true,value:""},{show:true,value:""},{show:true,value:""},{show:true,value:""},{show:true,value:""},],
        [{show:false},{show:true,taged:true,number:"5",value:""},{show:false},{show:false},{show:false},{show:false},{show:true,taged:true,number:"6",value:""},{show:false},{show:false},{show:true,value:""},{show:false},{show:false},{show:false},{show:false},{show:true,value:""},{show:false},{show:false},],
        [{show:false},{show:true,value:""},{show:false},{show:false},{show:false},{show:false},{show:true,value:""},{show:false},{show:false},{show:true,value:""},{show:false},{show:false},{show:false},{show:false},{show:false},{show:false},{show:false},],
        [{show:false},{show:true,value:""},{show:false},{show:false},{show:false},{show:false},{show:true,value:""},{show:false},{show:false},{show:true,value:""},{show:false},{show:false},{show:false},{show:false},{show:false},{show:false},{show:false},],
        [{show:true,taged:true,number:"7",value:""},{show:true,value:""},{show:true,value:""},{show:true,value:""},{show:true,value:""},{show:true,value:""},{show:true,value:""},{show:true,value:""},{show:true,value:""},{show:true,value:""},{show:true,value:""},{show:false},{show:false},{show:false},{show:false},{show:false},{show:false},],
        [{show:false},{show:true,value:""},{show:false},{show:false},{show:false},{show:false},{show:true,value:""},{show:false},{show:false},{show:true,value:""},{show:false},{show:false},{show:false},{show:false},{show:false},{show:false},{show:false},],
        [{show:false},{show:true,value:""},{show:false},{show:false},{show:false},{show:false},{show:true,value:""},{show:false},{show:false},{show:false},{show:false},{show:false},{show:false},{show:false},{show:false},{show:false},{show:false},],
        [{show:false},{show:true,value:""},{show:false},{show:false},{show:false},{show:true,taged:true,number:"8",value:""},{show:true,value:""},{show:true,value:""},{show:true,value:""},{show:true,value:""},{show:true,value:""},{show:true,value:""},{show:false},{show:false},{show:false},{show:false},{show:false},],
    ])
    const [showEngagementsModal,setShowEngagementsModal] = useState(false)
    const [mots,setMots] = useState([
        {positions:[[0,9],[1,9],[2,9],[3,9],[4,9],[5,9],[6,9],[7,9],[8,9],[9,9],[10,9],[11,9],[12,9],[13,9]],mots:["a","d","m","i","n","i","s","t","r","a","t","i","o","n"],trouver:false},
        {positions:[[0,16],[1,16],[2,16],[3,16],[4,16],[5,16],[6,16],[7,16],[8,16]],mots:["b","é","n","é","v","o","l","a","t"],trouver:false},
        {positions:[[1,14],[2,14],[3,14],[4,14],[5,14],[6,14],[7,14],[8,14],[9,14]],mots:["a","p","p","r","o","u","v","e","r"],trouver:false},
        {positions:[[8,8],[8,9],[8,10],[8,11],[8,12],[8,13],[8,14],[8,15],[8,16]],mots:["p","r","é","s","i","d","e","n","t"],trouver:false},
        {positions:[[9,1],[10,1],[11,1],[12,1],[13,1],[14,1],[15,1]],mots:["c","o","n","s","e","i","l"],trouver:false},
        {positions:[[9,6],[10,6],[11,6],[12,6],[13,6],[14,6],[15,6]],mots:["f","i","n","a","n","c","e"],trouver:false},
        {positions:[[12,0],[12,1],[12,2],[12,3],[12,4],[12,5],[12,6],[12,7],[12,8],[12,9],[12,10]],mots:["a","s","s","o","c","i","a","t","i","o","n"],trouver:false},
        {positions:[[15,5],[15,6],[15,7],[15,8],[15,9],[15,10],[15,11]],mots:["g","e","s","t","i","o","n"],trouver:false},
    ])
    const verification=(Array)=>{
        for(let mot=0;mot<mots.length;mot++){
            if(!mots[mot].trouver){
                for(let w=0;w<mots[mot].positions.length;w++){
                    if(Array[mots[mot].positions[w][0]][mots[mot].positions[w][1]].value.toLowerCase() != mots[mot].mots[w].toLowerCase()){
                        break
                    }
                        
                    if(w==mots[mot].positions.length-1){
                        let newArray = [...mots]
                        console.log("trouver")
                        newArray[mot] = {positions:mots[mot].positions,mots:mots[mot].mots,trouver:true};
                        setMots(newArray);
                        if(Object.values(newArray).every(mot => mot.trouver === true)){
                            setShowEngagementsModal(true)
                        }
                    }
                }
            }                
        }
        return
    }
    const instruction = (y,x,value)=>{
        let newArray = [...cases]
        if(cases[y][x].taged){
            newArray[y][x] = {show:true,taged:true,number:cases[y][x].number,value:value};
        }else{
            newArray[y][x] = {show:true,value:value};
        }
        setCases(newArray);
        verification(newArray)
    }

    return(
        <div class="grid min-h-[90vh]">
            <div class="place-self-center"><h1 class="font-bold text-6xl">Engagements</h1><h1 class="font-bold text-xl">Mots croisés</h1><h1 class=" text-xl">(ne pas oublier les 'é' si nécéssaire)</h1></div>
            <div class="h-[70vh] w-[32rem] place-self-center">
                <div class=" h-[50vh] grid grid-rows-16">
                    {
                        cases.map((rows,y)=>
                            <div class="h-full w-full grid grid-cols-17">
                                {
                                    rows.map((lettre,x)=>
                                        <div>
                                            {
                                                lettre.show? 
                                                <div class="h-full ring-2 w-full relative">
                                                    {
                                                        lettre.taged?
                                                        <div class=" h-full">
                                                            <p class="absolute -top-1 left-0 text-sm text-gray-500">{lettre.number}</p>
                                                            <input 
                                                                id={'${x}${y}'}
                                                                type="text" 
                                                                maxLength="1" 
                                                                class="w-full text-center text-xl  focus:outline-none "
                                                                onChange={(e)=>{instruction(y,x,e.target.value)}}
                                                            />
                                                        </div> 
                                                        :
                                                        <div class=" h-full">
                                                            <input 
                                                                id={'${x}${y}'}
                                                                type="text" 
                                                                maxLength="1" 
                                                                class="w-full text-center text-xl focus:outline-none"
                                                                onKeyUp={(e)=>{instruction(y,x,e.target.value)}}
                                                            />
                                                        </div> 
                                                    }
                                                </div>
                                                :
                                                <div class=" h-full">{lettre.show} </div>
                                            }
                                        </div>
                                    )
                                }
                            </div>
                        )
                    }
                </div>
                <div class=" h-[20vh] grid grid-cols-2">
                    <div class=" h-flex grid  mt-4">
                        <h1 class="place-self-center font-bold mb-6">Horizontal</h1>
                        {mots[3].trouver?<h1 class=" text-sm text-green-300">4. Personne qui préside une assemblée</h1>:<h1 class=" text-sm">4. Personne qui préside une assemblée</h1>}
                        {mots[6].trouver?<h1 class=" text-sm text-green-300">7. Groupement de personnes qui s'unissent en vue d'un but déterminé</h1>: <h1 class=" text-sm">7. Groupement de personnes qui s'unissent en vue d'un but déterminé</h1>}
                        {mots[7].trouver?<h1 class=" text-sm mb-10 text-green-300">8. Action ou manière de gérer</h1>: <h1 class=" text-sm mb-10">8. Action ou manière de gérer</h1>}
                    </div>
                    <div class=" h-flex grid  mt-4">
                        <h1 class="place-self-center font-bold mb-6">Vertical</h1>
                        {mots[0].trouver?<h1 class=" text-sm text-green-300">1. Synonyme de gestion et direction</h1>:<h1 class=" text-sm ">1. Synonyme de gestion et direction</h1>}
                        {mots[1].trouver?<h1 class=" text-sm text-green-300">2. Qui apporte son aide volontaire et sans être rémunéré</h1>:<h1 class=" text-sm">2. Qui apporte son aide volontaire et sans être rémunéré</h1>}
                        {mots[2].trouver?<h1 class=" text-sm text-green-300">3. Donner raison à quelqu'un, être de son avis</h1>:<h1 class=" text-sm">3. Donner raison à quelqu'un, être de son avis</h1>}
                        {mots[4].trouver?<h1 class=" text-sm text-green-300">5. Opinion donnée à quelqu'un sur ce qu'il doit faire</h1>:<h1 class=" text-sm">5. Opinion donnée à quelqu'un sur ce qu'il doit faire</h1>}
                        {mots[5].trouver?<h1 class=" text-sm text-green-300">6. Ressources pécuniaires</h1>:<h1 class=" text-sm">6. Ressources pécuniaires</h1>}
                    </div>
                </div>
            </div>
            <Modal isVisible={showEngagementsModal} onClose={() => setShowEngagementsModal(false)}>
              <h1 class="font-bold tracking-wider text-5xl mb-2 w-full text-black text-center mt-5">
                Engagements
              </h1>  
              <h1 class=" tracking-wider text-xl mb-6 w-[90%] text-black text-justify mt-10 ml-[5%]">
              Mon parcours académique est enrichi par un fort engagement social qui m’a permis de développer des compétences essentielles en leadership, en organisation et en travail d’équipe. En tant que membre du conseil d’administration de l’AEP à Polytechnique Montréal et ancien président du comité socio-culturel au Collégial International Sainte-Anne, j’ai acquis une expérience précieuse dans la gestion de projets, la prise de décisions stratégiques et la coordination d’équipes. Ces engagements m’ont appris à gérer des responsabilités variées, à communiquer efficacement et à favoriser un environnement collaboratif, des compétences qui me seront précieuses tout au long de ma carrière professionnelle.
              </h1>              
            </Modal>
        </div>
    )
}

export default Engagements