import React, { useState } from 'react'

export default function Formularios() {
  const [nombre, setNombre] = useState("");
  const [sabor, setSabor] = useState("");
  const [lenguaje, setLenguaje] = useState("");
  const [terminos, setTerminos] = useState(false);

//utilizando un solo state
//const [form, setForm] = useState({});

//funciones para controlar form

/* const handlerChange=(e)=>{
  setForm({
    ...form,
    [e.target.name]:e.target.value,
  })
}
const handlerChecked=(e)=>{
  setForm({
    ...form,
    [e.target.name]:e.target.checked,
  })
}
 */
  const handlerSubmit = (e) => {
    e.preventDefault();
    alert("Se envio el formulario");
  }

 /*  const enviar = (e) => {
    e.preventDefault();
    console.log(nombre);
  } */

  return (
    <>
      <h2>Formularios</h2>
      <form onSubmit={handlerSubmit}>
        <label htmlFor="nombre">Nombre</label>
        <input type="text"
          id="nombre"
          name="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)} />
        {/* <button onClick={enviar} >Enviar</button> */}
        <p>Elije tu Sabor JS Favorito</p>
        <input type="radio" id="vanilla" name="sabor" value="vanilla" /* onChange={handlerChange} */ onChange={(e) => setSabor(e.target.value)} defaultChecked />
        <label htmlFor="vanilla">Vanilla</label>
        <input type="radio" id="react" name="sabor" value="react"/*  onChange={handlerChange} */ onChange={(e) => setSabor(e.target.value)} />
        <label htmlFor="react">React</label>
        <input type="radio" id="angular" name="sabor" value="angular" /* onChange={handlerChange} */ onChange={(e) => setSabor(e.target.value)} />
        <label htmlFor="angular">Angular</label>
        <input type="radio" id="vue" name="sabor" value="vue" /* onChange={handlerChange} */ onChange={(e) => setSabor(e.target.value)} />
        <label htmlFor="vue">Vue</label>
        <input type="radio" id="svelte" name="sabor" value="svelte" /* onChange={handlerChange} */ onChange={(e) => setSabor(e.target.value)} />
        <label htmlFor="svelte">Svelte</label>

        <p>Elije tu lenguaje de programacion favorito</p>
        <select name="lenguaje" /* onChange={handlerChange} */ onChange={(e) => setLenguaje(e.target.value)}>
          <option value="">---</option>
          <option value="js">JavaScript</option>
          <option value="php">Php</option>
          <option value="python">Python</option>
          <option value="go">Go</option>
          <option value="rb">Rb</option>
        </select>

        <label htmlFor="terminos">Acepto terminos y condiciones</label>
        <input type="checkbox" name="terminos" id="terminos" /* onChange={handlerChange} */ onChange={(e) => setTerminos(e.target.checked)} />

        <input type="submit" />
      </form>
    </>
  )
}
