import React, { Component } from 'react';

function Pokemon(props){
    return(
        <figure>
            <img src={props.avatar} alt={props.name}/>
            <figcaption>{props.name}</figcaption>
        </figure>
    );
}


export default class AjaxApis extends Component {
state={
    pokemons:[],

}

componentDidMount(){
    let URL="https://pokeapi.co/api/v2/pokemon/";
    fetch(URL)
    .then(res=>res.json())
    .then(json=>{
        json.results.forEach(el => {
          let pokemon ={
            id:json.id,
            name:json.name,
            avatar:json.sprites.front_default,
          };
          

        });
    })
    
}

    render() {
        return (
         <>
         <h2>Peticiones Asincronas en Componente de Clase</h2>
         </>
        );
    }
}

