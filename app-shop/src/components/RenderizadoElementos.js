import React, { Component } from 'react'
import data from '../helpers/data.json'

function ElementoLista(props){
    return(
        <li>
            <a href={props.elemento.web} target="_blank">{props.elemento.name}</a>
          
        </li>
    )
}

export default class RenderizadoElementos extends Component {

    constructor(props){
        super(props);
        this.state = {
            seasons:["Primavera", "Verano", "Otoño","Invierno"],
        }
    }
  render() {
    return (
        <>
      <div>RenderizadoElementos</div>
      <h3>Estaciones del año</h3>
      <ol>
        {
            this.state.seasons.map((el,index)=><li key={index}>{el}</li>)
        }
      </ol>
      <h3>FrameworksFrondend Javascript</h3>
      <ul>
        {
            data.frameworks.map((elemento,index)=><ElementoLista key={elemento.id} elemento={elemento}/>)
        }
      </ul>
      </>
    )
  }
}
