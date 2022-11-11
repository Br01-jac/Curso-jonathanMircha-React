import React,{useEffect,useState} from 'react'
export default function ScrollHooks (){
    const[scrollY,setScrollY] = useState(0);
useEffect(() => {
console.log("Fase de Actualizacion");

const detectarScroll=()=> setScrollY(window.pageYOffset);

detectarScroll();
});

//Ejecutar una vez
useEffect(()=>{
    console.log("Fase de Montaje");
},[]); 

    return(
        <>
        <h2>Hooks useEffect y ciclo de vida</h2>
        <p>Scroll y del navegador {scrollY}</p>
        </>
    )
}