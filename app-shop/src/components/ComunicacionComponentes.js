import React, { Component } from 'react'

export default class Padre extends Component {
    state = {
        contador: 0,
    }

    incrementarContador = (e) => {

        this.setState({
            contador: this.state.contador + 1,
        })
    }

    render() {
        return (
            <>
                <h2>Comunicacion entre Componentes</h2>
                <Hijo mensaje="Mensaje para hijo 1" />
                <Hijo incremento={this.incrementarContador} mensaje="Mensaje para el hijo 2"/>
                <h3>{this.state.contador}</h3>
            </>
        )
    }
}

//comunicacion hijo a padre
function Hijo(props) {
    return <>
    <h3>{props.mensaje}</h3>
    <button onClick={props.incremento}> +</button>
    
    </>
}

