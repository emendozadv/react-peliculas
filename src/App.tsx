//import React, {useEffect, useState}from 'react';
// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import MostrarTexto from './MostrarTexto';
import EjemploReloj from './EjemploReloj';
import ProyectarContenido2 from './ProyectarContenido2'
import ContenidoDinamico from './ContenidoDinamico';
import FormularioTexto from './FormularioTexto';
import EjemploUseEffect from './EjemploUseEffect';
import ValorContext from './ValorContext';
import Abuelo from './Abuelo';

function App() {
  const [texto, setTexto] = useState('Valor por defecto');
  const [checked, setChecked] = useState(false);
  const imagenURL = "https://ensocore.com/media/61/reactjs-logo-sticker%20%281%29.jpg";
  const manejarClick = () => console.log('click');

  // const manejarKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => { 
  //   console.log(e.currentTarget.value);
  //   setTexto(e.currentTarget.value);
  // }

   const manejarKeyUp = (textoInput: string) => { 
    console.log(textoInput);
    setTexto(textoInput);
  }

  const parteIntermedia = <EjemploReloj />

  const estilo = {
    backgroundColor: 'red', width: '50px', height: '50px', marginLeft: '1rem'
    }
    
    const parteInferior = <div style={estilo}></div>

    const calificaciones = [
      {nombre: 'Felipe', calificacion: 75},
      {nombre: 'Claudia', calificacion: 85},
      {nombre: 'Roberto', calificacion: 95}
    ]

  return (
    <div>
    <h1 className='rojo'>Hola mundo</h1>

    <ValorContext.Provider value={texto}>
      <Abuelo/>
    </ValorContext.Provider>

    <ContenidoDinamico calificacion = {85}/>
    {calificaciones.map(cal => <ContenidoDinamico key={cal.nombre} {...cal}/>)}

    <div>
    <input type="checkbox"
    onChange={(e) => setChecked(e.currentTarget.checked)}
    checked={checked} /> Mostrar componente useEffect
    </div>

    {checked ? <EjemploUseEffect /> : null}
    

    <button 
      // onClick={manejarClick}
      onMouseEnter={() => console.log('entrando')}
      onClick={() => console.log('click desde el botón')}
    
    >Clickeame</button>
    <br />
    <br />

    <FormularioTexto manejarKeyUp={(e: string) => manejarKeyUp(e)} />

    {/* <input type="text"
    onKeyUp={(e) => manejarKeyUp(e)}
    /> */}

    {/* <div>
    {texto}
    </div> */}
    <MostrarTexto texto={texto} />

    {/* <ProyectarContenido>
    <>
      <span>hola proyectando contenido</span>
      <img alt="logo react" src={imagenURL} />
      </>
    </ProyectarContenido> */}

    <ProyectarContenido2
    // parteSuperior={<h3>Esta es la parte de arriba</h3>} 
    parteSuperior = {<span>Este es un mensaje del componente padre</span>}
    parteIntermedia={parteIntermedia}
    parteInferior={parteInferior}
    />
    

    
    <img alt="logo react" src={imagenURL} />
    {/* <div>
    <input type="checkbox" 
    onChange={(e) => setChecked(e.currentTarget.checked)}
    checked={checked} /> Este es un checkbox </div> */}
    </div>

  );
}

export default App;
