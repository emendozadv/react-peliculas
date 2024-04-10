import AppCSS from './App.module.css';
const subtitulo = "Este es un subtitulos";
const duplicar = (valor: number) => valor*2;

export default function EjemploCSS(){
    const cuadradoAzul = {
        backgroundColor: 'blue',
        width: '50px',
        height: '50px',
        marginLeft: '1rem'
        }
    return (
    <>
    <div className="cuadradoRojo"></div>
    <div style={{backgroundColor: 'green', width: '50px', height: '50px', marginLeft:'1rem'}}></div>
    <div style={cuadradoAzul}></div>
    <br />
    <div style={cuadradoAzul}></div>
    <h3 style={{color: 'blue'}}>{subtitulo.toLocaleUpperCase()} </h3>
    <h4 className='color'> Index: El doble de 3 es {duplicar(3)}</h4>
    <h4 className={AppCSS.color}>App.module.css</h4>
    </>
    )
    }