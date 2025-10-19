import React from 'react';

const Gallery: React.FC = () => {
  const items = [
    { type: 'fanart', src: 'url-a-fanart.jpg' },
    // Agrega más
  ];

  return (
    <section id="gallery" className="section">
      <h2>Galería de Fanart/Clips/Memes</h2>
      <div className="gallery-grid">
        {items.map((item, i) => (
          <img key={i} src={item.src} alt={item.type} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;