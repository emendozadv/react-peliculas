//import React, {useEffect, useState}from 'react';
// import logo from './logo.svg';
import './App.css';
import AppCSS from './App.module.css';

function App() {
  const cuadradoAzul = {
    backgroundColor: 'blue',
    width: '50px',
    height: '50px',
    marginLeft: '1rem'
    }
 const subtitulo = "Este es un subtitulos";
 const duplicar = (valor: number) => valor*2;
 const imagenURL = "https://ensocore.com/media/61/reactjs-logo-sticker%20%281%29.jpg";

  return (
    <div>
    <h1 className='rojo'>Hola mundo</h1>

    <div className="cuadradoRojo"></div>
    <div style={{backgroundColor: 'green', width: '50px', height: '50px', marginLeft:'1rem'}}></div>
    <div style={cuadradoAzul}></div>
    <br />
    <div style={cuadradoAzul}></div>
    <h3 style={{color: 'blue'}}>{subtitulo.toLocaleUpperCase()} </h3>
    <h4 className='color'> Index: El doble de 3 es {duplicar(3)}</h4>
    <h4 className={AppCSS.color}>App.module.css</h4>
    <img alt="logo react" src={imagenURL} />
    <div>
    <input type="checkbox" checked={false} /> Este es un checkbox </div>
    </div>

  );
}

export default App;
