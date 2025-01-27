import React, { useEffect } from "react";
import { useState } from "react";
import Modal from "../composants/modals";
function Prix(){
    const [musics,setMusics] = useState({"riptide": false,"cake by the ocean":false,"body like a back road":false})
    const [showBourseModal, setShowBourseModal] = useState(false);
    const [secret,setSecret] = useState(true)
    const verifier = (id,name) =>{
        if(document.getElementById(id).value.toLowerCase() == name){
            let newArray = {...musics}
            newArray[name] = true;
            setMusics(newArray);
        }
    }
    const allTrue = () => {
        return Object.values(musics).every(value => value === true);
    };
    useEffect(()=>{
        if(allTrue()){
            setSecret(false);
        }
    },[musics])
    
    return(
        <div class="grid min-h-[90vh]">
            <div class="place-self-center"><h1 class="font-bold text-6xl text-center">Prix</h1><h1 class="font-bold text-xl">Devinez le titre de chaque chanson!</h1></div>
            <button class="h-12 ring-3 bg-blue-500 text-white font-bold text-xl w-32 place-self-center rounded" onClick={()=>{setShowBourseModal(true)}}>INFO!</button>
            <div class=" h-[70vh] grid grid-rows-8">
                <div class=" row-span-6 grid-rows-3 grid mt-8 mb-16">
                    <div class="w-[32rem] place-self-center h-full grid grid-rows-2 gap-4">
                        <div class="flex items-center justify-between w-full">
                            <h1 class="text-2xl font-bold">1.</h1>
                            {musics["riptide"]? 
                                <div><h1 class="text-4xl font-bold text-green-400 mr-8">Riptide</h1></div>
                                :
                                <input id="music1" type="text" onChange={()=>{verifier("music1","riptide")} }  class="flex-1 text-xl border-b-2 border-gray-300 focus:border-blue-500 focus:ring-0 outline-none py-1 px-2 text-gray-700 placeholder-gray-400 transition duration-300 ml-4" placeholder="Titre de la musique"/>
                            }
                            <h1 class="text-2xl font-bold cursor-pointer text-gray-500 hover:text-red-500 transition duration-300"></h1>
                        </div>
                        <div class="place-self-center">
                            <audio controls>
                                <source src="./Vance Joy - 'Riptide' Official Video.mp3" type="audio/mp3"/>
                                Your browser does not support the audio element. La réponse est "Riptide".
                            </audio>
                        </div>
                    </div>
                    <div class="w-[32rem] place-self-center h-full grid grid-rows-2 gap-4">
                        <div class="flex items-center justify-between w-full">
                            <h1 class="text-2xl font-bold">2.</h1>
                            {musics["cake by the ocean"]? 
                                <div><h1 class="text-4xl font-bold text-green-400 mr-8">Cake by the ocean</h1></div>
                                :
                                <input id="music2" type="text" onChange={()=>{verifier("music2","cake by the ocean")} }  class="flex-1 text-xl border-b-2 border-gray-300 focus:border-blue-500 focus:ring-0 outline-none py-1 px-2 text-gray-700 placeholder-gray-400 transition duration-300 ml-4" placeholder="Titre de la musique"/>
                            }
                            <h1 class="text-2xl font-bold cursor-pointer text-gray-500 hover:text-red-500 transition duration-300"></h1>
                        </div>
                        <div class="place-self-center">
                            <audio controls>
                                <source src="./DNCE - Cake By The Ocean.mp3" type="audio/mp3"/>
                                Your browser does not support the audio element. La réponse est "Cake By The Ocean".
                            </audio>
                        </div>
                    </div>
                    <div class="w-[32rem] place-self-center h-full grid grid-rows-2 gap-4">
                        <div class="flex items-center justify-between w-full">
                            <h1 class="text-2xl font-bold">3.</h1>
                            {musics["body like a back road"]? 
                                <div><h1 class="text-4xl font-bold text-green-400 mr-8">Body like a back road</h1></div>
                                :
                                <input id="music3" type="text" onChange={()=>{verifier("music3","body like a back road")} }  class="flex-1 text-xl border-b-2 border-gray-300 focus:border-blue-500 focus:ring-0 outline-none py-1 px-2 text-gray-700 placeholder-gray-400 transition duration-300 ml-4" placeholder="Titre de la musique"/>
                            }
                            <h1 class="text-2xl font-bold cursor-pointer text-gray-500 hover:text-red-500 transition duration-300"></h1>
                        </div>
                        <div class="place-self-center">
                            <audio controls>
                                <source src="./Sam Hunt - Body Like A Back Road (Official Audio).mp3" type="audio/mp3"/>
                                Your browser does not support the audio element. La réponse est "Body like a back road".
                            </audio>
                        </div>
                    </div>
                </div>
                <div class=" row-span-2 grid">
                    {secret?
                        <div class="h-full w-[32rem] bg-black place-self-center rounded-2xl grid">
                            <h1 class="place-self-center font-bold text-3xl text-white">Message bloqué ultra-secret</h1>
                        </div>
                        :
                        <div class="h-full w-[32rem] ring-4 place-self-center rounded-2xl grid text-justify">
                            <h1 class="place-self-center  ml-4 mr-4">Pour introduire ma bourse d’innovation Ted Rogers, j’ai choisi une approche originale en m’appuyant sur la musique. J’ai identifié les chansons Riptide, Cake by the Ocean et Body Like a Back Road, toutes présentes dans la playlist "End of Summer" du compte officiel de Rogers communication sur Spotify. </h1>
                        </div>
                    }
                </div>
            </div>
            <Modal isVisible={showBourseModal} onClose={() => setShowBourseModal(false)}>
              <h1 class="font-bold tracking-wider text-5xl mb-2 w-full text-black text-center mt-5">
                Bourse
              </h1>  
              <h1 class=" tracking-wider text-xl mb-6 w-[90%] text-black text-justify mt-10 ml-[5%]">
              J'ai eu le grand honneur de recevoir la bourse d'admission Innovation Ted Rogers. Il s'agit d'une bourse de 100 000$ remis à 10 étudiants au canada. Les critères de sélection était l'excellence académique et un grand intéret pour les technologies (souligné par nombreux de mes professeurs de science).
              </h1>           
            </Modal>
        </div>
    )
}

export default Prix 