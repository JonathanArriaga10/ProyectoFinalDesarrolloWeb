import React, { useState } from 'react';


// Importación de CSS e Imagenes
import './CSSPaginas.css';

function Contacto({ linkedinIcon, twitterIcon, instagramIcon, githubIcon }) {
  return (
    <div className="Principal">
      <h2>Contacto</h2>

      {/* Contenido de "Contacto" */}
      <p>Puedes contactar conmigo por estos medios: </p>

      <h3>Información de Contacto</h3>
      <p>Correo Electrónico: jarriagac2@miumg.edu.gt</p>
      <p>Teléfono: 47926092</p>

      <h2>Redes Sociales</h2>
      
      {/* Se mostrarán los links a redes sociales */}
      <ul>
        <li>
          <img src={linkedinIcon} alt="LinkedIn" style={{ width: "25px", height: "25px", marginRight: '10px' }} />
          <a href="https://gt.linkedin.com/">LinkedIn</a>
        </li>
        <li>
          <img src={twitterIcon} alt="X" style={{ width: "25px", height: "25px", marginRight: '10px' }} />
          <a href="https://twitter.com/home?lang=es">Twitter</a>
        </li>
        <li>
          <img src={instagramIcon} alt="Instagram" style={{ width: "25px", height: "25px", marginRight: '10px' }} />
          <a href="https://www.instagram.com/">Instagram</a>
        </li>
        <li>
          <img src={githubIcon} alt="GitHub" style={{ width: "25px", height: "25px", marginRight: '10px' }} />
          <a href="https://github.com/JonathanArriaga10">GitHub</a>
        </li>
      </ul>

      
    </div>
  );
}

export default Contacto;