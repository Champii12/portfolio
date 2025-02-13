import fotoPerfil from '../assets/fotoPerfil.jpg';
import cv from '../assets/CV_ALEJANDRO_PELÁEZ_PÉREZ.pdf';

export default function Header() {
return(
    <header className="App-header">
            <div className="App-title-container">
              <h1 className="App-title">Hola, soy Alejandro Peláez</h1>
              <div className="App-section-title">
                <h2>Desarrollador FullStack</h2>
                <p>Soy un apasionado del desarrollo web y software. Tengo 22 años y soy español 🇪🇸.</p>
              </div>
              <div className="App-buttons">
              <a href="https://github.com/Champii12" target="_blank" rel="noopener noreferrer" className="App-button">GitHub</a>
              <a href="https://www.linkedin.com/in/alejandro-pel%C3%A1ez-p%C3%A9rez-647ba632b/" target="_blank" rel="noopener noreferrer" className="App-button">LinkedIn</a>
              <a href= {cv} download="CV_ALEJANDRO_PELÁEZ_PÉREZ.pdf" className="App-button"> Descargar mi CV </a>
            </div>
            </div>
            <img src={fotoPerfil} className="App-logo" alt="logo" />
          </header>
)

}