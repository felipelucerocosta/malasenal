import React, { useState } from 'react';

const Carousel: React.FC = () => {
  const members = [
    { name: "Integrante 1", photo: "url-a-foto1.jpg", video: "url-a-video1.mp4" },
    // Agrega más miembros
  ];
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="carousel" className="section">
      <h2>Carrusel de Integrantes</h2>
      <div className="carousel">
        {members.map((member, i) => (
          <img key={i} src={member.photo} alt={member.name} onClick={() => setSelected(i)} />
        ))}
      </div>
      {selected !== null && (
        <div className="modal">
          <video controls src={members[selected].video} />
          <button onClick={() => setSelected(null)}>Cerrar</button>
        </div>
      )}
    </section>
  );
};

export default Carousel;