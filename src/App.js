import React from 'react';


import './App.css';
function App() {
  return <div className="App">
  <h1  align='center' >Open<strong>shop</strong></h1>
  <h2 align='center'>Integrantes del equipo: </h2>
  <table class="tabla" border="2px"  align='center' >
   <tr class="titile">
            <td >Nombre</td>
            <td>Apellido</td>
            <td>Correo</td>
            <td>Celular</td>
        </tr>
        <tr>
            <td>David</td>
            <td>Morales</td>
            <td>Davidm200289@gmail.com</td>
            <td>3145168626</td>
        </tr>
        <tr>
            <td>Geraldinne</td>
            <td>Jaramillo</td>
            <td>Geraldinne8821@gmail.com</td>
            <td>3113582327</td>
        </tr>
        <tr>
            <td>Melissa</td>
            <td>Quintero</td>
            <td>Melissaquinterov@gmail.com</td>
            <td>3024238098</td>
        </tr>
        <tr>
            <td>Santiago</td>
            <td>Restrepo</td>
            <td>santires2612@gmail.com</td>
            <td>3128238745</td>
            
        </tr>
      </table>
       <h3 align='center' class="parrafo">¿Qué es Babel?</h3>
      <p align='center'>Babel es un compilador que convierte un codigo nuevo en una versión compatible de JavaScript.<br/>
      Teniendo la ventaja de poder programar en un estándar nuevo sin renunciar a la compatibilidad entre navegadores.</p> 

       <h3 align='center' class="parrafo">¿Qué es Webpack?</h3>
      <p align='center'>Webpack es una herramienta de compilación util para aplicaciones JavaScript modernas, este se encarga de empaquetar <br/>módulos, 
      realizando una buena gestión de estos para que el proyecto funcione con todas sus dependencias.</p> 

      <h3 align='center' class="parrafo">¿Para qué se usa Babel en REACT?</h3>
      <p align='center'>Babel se encarga de que al crear componentes en React, estos puedan <br/> funcionar en todos los navegadores realizando transformaciones necesarias del código.  
      </p> 

      <h3 align='center' class="parrafo">¿Para qué se usa Webpack en REACT?</h3>
      <p align='center'>Webpack se encarga de que cada vez que guardemos un archivo en React, genere los <br/>archivos necesarios para ver el resultado desde el navegador hasta el puerto   
      </p> 
      </div>;
  
}

export default App;
