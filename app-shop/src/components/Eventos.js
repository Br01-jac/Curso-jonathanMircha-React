import React, { Component } from 'react'

export class EventosES6 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }

  sumar() {
    this.setState({
      contador: this.state.contador + 1,
    })
  }

  restar() {
    this.setState({
      contador: this.state.contador - 1,
    })
  }

  render() {
    return (
      <>
        <h2>Eventos en componente de clases</h2>
        <h3>{this.state.contador}</h3>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>

      </>
    )
  }
}


export class EventosES7 extends Component {
  state = {
    contador: 0,
  };

  //Arrow functions
  sumar = (e) => {
    this.setState({
      contador: this.state.contador + 1,
    })
  }

  restar = (e) => {
    this.setState({
      contador: this.state.contador - 1,
    })
  }

  render() {
    return (
      <>
        <h2>Eventos en componente de clases ES7</h2>
        <h3>{this.state.contador}</h3>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>

      </>
    )
  }
}

function Boton(props){
  return(
    <button onClick={props.tocar}>Boton componente</button>
  )
}

//Boton constante

const Boton2 =({tocar})=>{
<button onClick={tocar}>Boton Constante</button>
}

export  class MasEventos extends Component {
  
  handleClick = (e,mensaje) =>{
    console.log(e);
    console.log(mensaje);
  }
  
  render() {
    return (
      <div>
        <h2>Mas sobre eventos</h2>
        <button 
        onClick={(e)=>this.handleClick(e,"Hola papus")}>Saludar</button>
        <Boton tocar={(e)=>this.handleClick(e,"Hola papus")}/>
        <Boton2/>
      </div>
    )
  }
}
