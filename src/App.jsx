import './App.css';
import Header from './components/Header';
import fotoTiempo from './assets/proyectoTiempo.png';
import logoGithub from './assets/github.svg';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-content">
        <h2>Proyectos</h2>
          <section className="App-project">
            <div className="App-project-content">
              <h3 className="App-project-title">
                Proyecto Tiempo
              </h3>        
              <p className="App-project-text">
                Aplicación web que muestra el clima actual en una ciudad específica, proporcionando información meteorológica precisa y actualizada.
                Está hecha con React y utiliza APIs para obtener los datos meteorológicos.
              </p>
              <a href="https://github.com/Champii12/Aplicaci-n-del-tiempo" target="_blank" rel="noopener noreferrer" className="App-button">
              <img src={logoGithub} className="App-logo-github" alt="logoGithub" />
              </a>
              </div>
            <img src={fotoTiempo} className="App-project-image" alt="Proyecto Tiempo" />
          </section>
        <h2>Estudios</h2>
          <section className="App-section">
            <div className='App-estudios'>
              <h3>Grado Superior</h3>
              <p>Desarrollo de Aplicaciones Multiplataforma</p>
              <p>Las Naves Salesianos Alcalá de Henares Madrid</p>
              <p>(Cursando en la actualidad)</p>
              <h3>Bachillerato en Ciencias y Tecnología</h3>
              <p>IES Cardenal Cisneros Alcalá de Henares Madrid</p>
            </div>
          </section>
          <h2>Contacto</h2>
          <section className="App-section">
            <p className='App-contact'>Puedes contactarme en alexpelaez12012003@gmail.com</p>
          </section>
      </div>
    </div>
  );
}

export default App;