import React, {  } from 'react';
import './styles.css';
import Trivia from './components/trivia';
import Carousel from './components/carousel';
import Forum from './components/foro';
import Gallery from './components/galeria';
import Poll from './components/pool';
import Calendar from './components/calendar';

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="header">
        <h1>Mala Señal Stream</h1>
        <nav>
          <a href="#stream">Stream</a>
          <a href="#trivia">Trivia</a>
          <a href="#carousel">Integrantes</a>
          <a href="#forum">Foro</a>
          <a href="#gallery">Galería</a>
          <a href="#poll">Encuestas</a>
          <a href="#calendar">Calendario</a>
        </nav>
      </header>
      
      <main>
        <section id="stream" className="stream-section">
          <h2>Stream en Vivo</h2>
          <div className="stream-placeholder">
            <p>Stream de Mala Señal aquí (placeholder)</p>
          </div>
        </section>
        
        <Trivia />
        <Carousel />
        <Forum />
        <Gallery />
        <Poll />
        <Calendar />
      </main>
      
      <footer className="footer">
        <p>© 2023 Mala Señal. Comunidad de streams.</p>
      </footer>
    </div>
  );
};

export default App;