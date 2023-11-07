import React from 'react';
// Importación de CSS e Imagenes
import './CSSPaginas.css';

function Inicio({ImagenPerfil, ImagenProyecto, ImagenContacto}) {
  return (
    <div className='Principal'>

      {/* Contenido de "Sobre Mi" */}
      <div className='textodiv'>
        <h3>Sobre Mí</h3>
        <p>Me llamo Jonathan Ivan Arriaga Campos y actualmente soy estudiante de la Universidad Mariano Galvez de Guatemala
        en la carrera de Ingeniería en Sistemas y Ciencias de la Computación. Me gusta el desarrollo web asi como todo lo 
        relacionado a la ciberseguridad</p>
      </div>
      <div className='imagen'>
        <img src={ImagenPerfil} alt="Fotografía de Presentación" style={{ width: "100px", height: "auto", borderRadius: "25%"}}/>
      </div>

      {/* Contenido de "Proyectos" */}
      <div className='textodiv'>
        <h3>Mis Proyectos</h3>
        <p>A lo largo de mi carrera universitaria he sido parte de algunos proyectos los cuales te pueden mostrar
          mi nivel en distintos ambitos
        </p>
      </div>
      <div className='imagen'>
        <img src={ImagenProyecto} alt="Introducción al Proyecto" style={{ width: "100px", height: "auto", borderRadius: "25%"}}/>
      </div>

      {/* Contenido de "Contacto*" */}
      <div className='textodiv'>
        <h3>Contacto</h3>
        <p>Si deseas contactarte conmigo para cualquier tipo de proyecto, asesoramiento no dudes en contactarme soy tu mejor
          opcion.
        </p>
      </div>
      <div className='imagen'>
        <img src={ImagenContacto} alt="Introducción a Contacto" style={{ width: "100px", height: "auto", borderRadius: "25%"}}/>
      </div>
    </div>
  );
}

export default Inicio;