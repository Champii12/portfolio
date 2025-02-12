import React from "react";
import './App.css';
import fotoPerfil from './assets/fotoPerfil.jpg';
import cv from './assets/CV_ALEJANDRO_PELÁEZ_PÉREZ.pdf';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-title-container">
          <h1 className="App-title">Hola, soy Alejandro Peláez</h1>
          <div className="App-section-title">
            <h2>Programador</h2>
            <p>Apasionado de la programación.
              Tengo 22 años y soy español  
            </p>
          </div>
          <div className="App-buttons">
          <a href="https://github.com/Champii12" target="_blank" rel="noopener noreferrer" className="App-button">GitHub</a>
          <a href="https://www.linkedin.com/in/alejandro-pel%C3%A1ez-p%C3%A9rez-647ba632b/" target="_blank" rel="noopener noreferrer" className="App-button">LinkedIn</a>
          <a href= {cv} download="CV_ALEJANDRO_PELÁEZ_PÉREZ.pdf" className="App-button"> Descargar mi CV </a>
        </div>
        </div>
        <img src={fotoPerfil} className="App-logo" alt="logo" />
      </header>
      
      <div className="App-content">
      <h2>Proyectos</h2>
        <section className="App-section">
          <p>Aquí puedes ver algunos de mis proyectos.</p>
        </section>
      <h2>Estudios</h2>
        <section className="App-section">
          <h3>Grado Superior</h3>
          <p>Desarrollo de Aplicaciones Multiplataforma. 
            (Cursando en la actualidad.)</p>
        </section>
        <h2>Contacto</h2>
        <section className="App-section">
          <p>Puedes contactarme en alexpelaez12012003@gmail.com.</p>
        </section>
      </div>
    </div>
  );
}

export default App;