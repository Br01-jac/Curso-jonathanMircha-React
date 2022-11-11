import React, { Component } from 'react';
function EstadoAHijo(props){
    return(
        <div>
            <h2>SOY EL HIJO</h2>
            <h3>{props.contadorHijo}</h3>
        </div>)
}

export default class Estado extends Component { constructor() {
        super()
        this.state = {
            contador: 0,
        };
//Aumentar cada segundo el contador del estado
        setInterval(()=>{
            this.setState({
                contador:this.state.contador +1       
            })
        },1000);
    }

    render() {
        return (
            <div>
                <h2>El Estado</h2>
                <p>{this.state.contador}</p>
                <div>
                    <EstadoAHijo contadorHijo={this.state.contador}/>
                </div>
            </div>
        )
    }
}
                                          