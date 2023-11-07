import React from 'react';
// Importación de CSS e Imagenes
import './CSSPaginas.css';

function Proyectos() {
  return (
    <div className="Principal">
      <h2>Mis Proyectos</h2>

      {/* Contenido de "Proyectos" */}
      <div className="proyecto">
        <h3>Desarrollo de Modulos de Bancos</h3>
        <p>El proyecto mas reciente que aun se encuentra en fase de implementacion, es un proyecto para un hotel el cuale
          ha sido divido en diversos modulos siendo mi persona encargado del modulo de conciliacion bancaria.
          Este ha requerido de diferentes modalidades de planificacion asi como de manejo de diagramacion, base de datos, etc.
        </p>
        <ul>
          <li><a href="https://github.com/JonathanArriaga10/modulo_bancos">Proyecto de Modulo de Bancos</a></li>
        </ul>
      </div>


      
    </div>
  );
}

export default Proyectos;
