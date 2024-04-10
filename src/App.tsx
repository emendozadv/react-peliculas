//import React, {useEffect, useState}from 'react';
// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const [texto, setTexto] = useState('Valor por defecto');
  const [checked, setChecked] = useState(false);
  const imagenURL = "https://ensocore.com/media/61/reactjs-logo-sticker%20%281%29.jpg";
  const manejarClick = () => console.log('click');

  const manejarKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => { 
    console.log(e.currentTarget.value);
    setTexto(e.currentTarget.value);
  }

  return (
    <div>
    <h1 className='rojo'>Hola mundo</h1>
    <button 
      // onClick={manejarClick}
      onMouseEnter={() => console.log('entrando')}
      onClick={() => console.log('click desde el botón')}
    
    >Clickeame</button>
    <br />
    <br />

    <input type="text"
    onKeyUp={(e) => manejarKeyUp(e)}
    />

    <div>
    {texto}
    </div>
    

    
    <img alt="logo react" src={imagenURL} />
    <div>
    <input type="checkbox" 
    onChange={(e) => setChecked(e.currentTarget.checked)}
    checked={checked} /> Este es un checkbox </div>
    </div>

  );
}

export default App;
