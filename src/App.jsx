import './App.css';
import Header from './components/Header';
import fotoTiempo from './assets/proyectoTiempo.png';
import logoGithub from './assets/github.svg';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <div className="App-content">
          <h2>Experiencia</h2>
          <section className="App-section">
            <div className="App-estudios">
              <h3>Desarrollador de automatizaciones</h3>
              <p>Mar 2025 - Jun 2025</p>
              <p>
                He desarrollado una macro en VBA para Excel que automatiza el cruce de información entre varias hojas y archivos.
                Además, creé un script en Python que procesa datos de múltiples archivos Excel para análisis y consolidación automatizada.
              </p>
            </div>
          </section>

          <h2>Proyectos</h2>
          <section className="App-project">
            <div className="App-project-content">
              <h3 className="App-project-title">Proyecto Tiempo</h3>
              <p className="App-project-text">
                Aplicación web que muestra el clima actual en una ciudad específica, proporcionando información meteorológica precisa y actualizada.
                Está hecha con React y utiliza APIs para obtener los datos meteorológicos.
              </p>
              <div className="App-project-links">
                <a href="https://github.com/Champii12/AppTiempo" target="_blank" rel="noopener noreferrer" className="App-button">
                  <img src={logoGithub || "/placeholder.svg"} className="App-logo-github" alt="logoGithub" />
                </a>
                <a href="https://tiempox.champii.es/" target="_blank" rel="noopener noreferrer" className="App-button">
                  Visitar web
                </a>
              </div>
            </div>
            <img src={fotoTiempo || "/placeholder.svg"} className="App-project-image" alt="Proyecto Tiempo" />
          </section>

          <h2>Estudios</h2>
          <section className="App-section">
            <div className='App-estudios'>
              <h3>Grado Superior</h3>
              <p>Desarrollo de Aplicaciones Multiplataforma</p>
              <p>Las Naves Salesianos Alcalá de Henares Madrid</p>
              <h3>Bachillerato en Ciencias y Tecnología</h3>
              <p>IES Cardenal Cisneros Alcalá de Henares Madrid</p>
            </div>
          </section>
        </div>
      </div>
      
      <footer className="App-footer">
        <p>© 2025 Alejandro Peláez · Contacto: <a href="mailto:alexpelaez12012003@gmail.com">alexpelaez12012003@gmail.com</a></p>
      </footer>
    </>
  );
}

export default App;