import fotoPerfil from "../assets/fotoPerfil.jpg";
import cv from "../assets/Alejandro_Peláez_CV.pdf";
import gitHub from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";

export default function Header() {
  return (
    <header className="hero">
      <div className="hero-text">
        <span className="hero-badge">Disponible para nuevos proyectos</span>

        <h1 className="App-title">Hola, soy Alejandro Peláez</h1>

        <div className="App-section-title">
          <h2>Analista de datos · Desarrollador BackEnd</h2>
          <p>
            Me apasiona crear soluciones útiles, automatizar procesos y
            desarrollar aplicaciones con una experiencia moderna, clara y
            profesional.
          </p>
        </div>

        <div className="App-buttons">
          <a
            href="https://github.com/Champii12"
            target="_blank"
            rel="noopener noreferrer"
            className="App-button icon-button"
            aria-label="GitHub"
          >
            <img src={gitHub} className="social-icon" alt="GitHub" />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/alejandro-pel%C3%A1ez-p%C3%A9rez-647ba632b/"
            target="_blank"
            rel="noopener noreferrer"
            className="App-button icon-button"
            aria-label="LinkedIn"
          >
            <img src={linkedin} className="social-icon" alt="LinkedIn" />
            <span>LinkedIn</span>
          </a>

          <a
            href={cv}
            download="Alejandro_Peláez_CV.pdf"
            className="App-button App-button-primary"
          >
            Descargar CV
          </a>
        </div>
      </div>

      <div className="hero-image-wrapper">
        <div className="hero-image-glow"></div>
        <img src={fotoPerfil} className="App-logo" alt="Foto de Alejandro Peláez" />
      </div>
    </header>
  );
}