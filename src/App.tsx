// App.tsx
import React from 'react';
import './styles.css';
import Carousel from './components/carousel';
import Forum from './components/foro';

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="header">
        <h1 className="title">Mala Señal Stream</h1>
        <nav>
          <a href="#stream">Stream</a>
          <a href="#carousel">Integrantes</a>
          <a href="#forum">Foro</a>
        </nav>
      </header>

      <main>
        <section id="stream" className="section stream-section">
          <h2>Stream en Vivo</h2>
          <div className="stream-placeholder">
            <p>📺 Transmisión de Mala Señal (placeholder)</p>
          </div>
        </section>

        <Carousel />
        <Forum />
      </main>

      <footer className="footer">
        <p>© 2025 Mala Señal. Comunidad de streams.</p>
      </footer>
    </div>
  );
};

export default App;