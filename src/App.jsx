import "./App.css";
import Header from "./components/Header";
import fotoTiempo from "./assets/proyectoTiempo.png";
import logoGithub from "./assets/github.svg";

function App() {
  return (
    <>
      <div className="App">
        <Header />

        <main className="App-content">
          <section className="content-block">
            <div className="section-heading">
              <span className="section-kicker">Trayectoria</span>
              <h2>Experiencia</h2>
            </div>

            <div className="cards-grid">
              <article className="App-section card">
                <div className="App-estudios">
                  <h3>Business Analytics</h3>
                  <span className="card-date">Sep 2025 - Feb 2026 · 6 meses</span>
                  <p>
                    Análisis y validación de datos, detección de discrepancias,
                    estandarización de información y optimización de procesos
                    para mejorar la calidad del dato y apoyar la toma de
                    decisiones.
                  </p>
                </div>
              </article>

              <article className="App-section card">
                <div className="App-estudios">
                  <h3>Desarrollador de automatizaciones</h3>
                  <span className="card-date">Mar 2025 - Jun 2025</span>
                  <p>
                    Desarrollo de una macro en VBA para Excel que automatiza el
                    cruce de información entre varias hojas y archivos. Además,
                    creación de un script en Python para procesar datos de
                    múltiples archivos Excel y consolidarlos automáticamente.
                  </p>
                </div>
              </article>
            </div>
          </section>

          <section className="content-block">
            <div className="section-heading">
              <span className="section-kicker">Portfolio</span>
              <h2>Proyectos</h2>
            </div>

            <article className="App-project card featured-project">
              <div className="App-project-content">
                <span className="project-tag">React · API · UI</span>
                <h3 className="App-project-title">Proyecto Tiempo</h3>
                <p className="App-project-text">
                  Aplicación web que muestra el clima actual en una ciudad
                  específica, proporcionando información meteorológica precisa y
                  actualizada. Está hecha con React y utiliza APIs para obtener
                  datos del tiempo.
                </p>

                <div className="App-project-links">
                  <a
                    href="https://github.com/Champii12/AppTiempo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="App-button icon-button"
                  >
                    <img
                      src={logoGithub}
                      className="social-icon"
                      alt="Repositorio GitHub"
                    />
                    <span>Código</span>
                  </a>

                  <a
                    href="https://tiempox.champii.es/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="App-button App-button-primary"
                  >
                    Visitar web
                  </a>
                </div>
              </div>

              <div className="project-image-shell">
                <img
                  src={fotoTiempo}
                  className="App-project-image"
                  alt="Proyecto Tiempo"
                />
              </div>
            </article>
          </section>

          <section className="content-block">
            <div className="section-heading">
              <span className="section-kicker">Formación</span>
              <h2>Estudios</h2>
            </div>

            <div className="cards-grid">
              <article className="App-section card">
                <div className="App-estudios">
                  <h3>Curso Universitario</h3>
                  <p>Curso HR Analytics</p>
                  <p>Universidad Antonio Nebrija</p>
                </div>
              </article>

              <article className="App-section card">
                <div className="App-estudios">
                  <h3>Grado Superior</h3>
                  <p>Desarrollo de Aplicaciones Multiplataforma</p>
                  <p>Las Naves Salesianos Alcalá de Henares, Madrid</p>
                </div>
              </article>

              <article className="App-section card">
                <div className="App-estudios">
                  <h3>Bachillerato en Ciencias y Tecnología</h3>
                  <p>IES Cardenal Cisneros</p>
                  <p>Alcalá de Henares, Madrid</p>
                </div>
              </article>
            </div>
          </section>
        </main>
      </div>

      <footer className="App-footer">
        <p>
          © 2025 Alejandro Peláez · Contacto:{" "}
          <a href="mailto:alexpelaez12012003@gmail.com">
            alexpelaez12012003@gmail.com
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;