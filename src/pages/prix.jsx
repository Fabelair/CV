import React from "react";
import { useState } from "react";
function Prix(){
    const [values, setValues] = useState(Array(11).fill(""));
    const handleChange = (index, e) => {
        const newValue = e.target.value.slice(-1); // Only allow one character per input
        const newValues = [...values];
        newValues[index] = newValue;
        setValues(newValues);
    
        // Move to the next input if a character is entered
        if (newValue && index < 11 - 1) {
          document.getElementById(`char-${index + 1}`).focus();
        }
    };
    return(
        <div class="grid min-h-[90vh]">
            <div class="place-self-center"><h1 class="font-bold text-6xl">Prix</h1><h1 class="font-bold text-xl">Devinez le titre de chaque chason!</h1></div>
            <div class=" h-[70vh] grid grid-rows-8">
                <div class=" row-span-6 grid-rows-3 grid mt-8 mb-16">
                    <div class="w-[32rem] ring-2 place-self-center h-full">
                        
                    </div>
                    <div class="w-[32rem] ring-2 place-self-center h-full">

                    </div>
                    <div class="w-[32rem] ring-2 place-self-center h-full">

                    </div>
                </div>
                <div class=" row-span-2 grid">
                    <div class="h-full w-[32rem] bg-black place-self-center rounded-2xl grid">
                        <h1 class="place-self-center font-bold text-3xl text-white">Message bloqué ultra-secret</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Prix 