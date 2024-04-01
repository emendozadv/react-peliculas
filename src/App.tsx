import React, {useEffect, useState}from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
 const subtitulo = "Este es un subtitulos";
 const duplicar = (valor: number) => valor*2;
 const imagenURL = "https://ensocore.com/media/61/reactjs-logo-sticker%20%281%29.jpg";

  return (
    <div>
    <h1>Hola mundo</h1>
    <h3>{subtitulo.toLocaleUpperCase()} </h3>
    <h4>El doble de 3 es {duplicar(3)}</h4>
    <img alt="logo react" src={imagenURL} />
    <div>
    <input type="checkbox" checked={false} /> Este es un checkbox </div>
    </div>

  );
}

export default App;
