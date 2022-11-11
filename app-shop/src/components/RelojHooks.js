import React, { useState, useEffect } from 'react'

function Reloj({ hora }) {
    return <h3>{hora}</h3>
}

export default function RelojHooks() {
    const [hora, setHora] = useState(new Date().toLocaleTimeString());
    const [estado, setEstado] = useState(false);

    useEffect(() => {
        let temporizador;
        if (estado) {
            temporizador = setInterval(() => {
                setHora(new Date().toLocaleTimeString());
            }, 1000)
        } else {
            clearInterval(temporizador);
        }
        return () => {
            console.log("Fase de desmontaje");
            clearInterval(temporizador);
        }
    }, [estado])

    return (
        <>
            <h2>Reloj con Hooks</h2>
            {estado && <Reloj hora={hora} />}
            <button onClick={() => setEstado(true)}>Iniciar</button>
            <button onClick={() => setEstado(false)}>Detener</button>
        </>
    )
}
