// components/Carousel.tsx
import React, { useState } from 'react';

interface Member {
  name: string;
  photo: string;
  video: string;
}

const Carousel: React.FC = () => {
  const members: Member[] = [
    { name: "Marco", photo: "../public/marco.jpg", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { name: "Integrante 2", photo: "https://via.placeholder.com/200/00ff00", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { name: "Integrante 3", photo: "https://via.placeholder.com/200/ff00ff", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
  ];

  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="carousel" className="section carousel-section">
      <div className="content-wrapper">
        <h2>Integrantes</h2>
        <p className="subtitle">Conocé a los miembros del equipo de Mala Señal</p>

        <div className="carousel">
          {members.map((member, i) => (
            <div key={i} className="member-card" onClick={() => setSelected(i)}>
              <img src={member.photo} alt={member.name} />
              <p>{member.name}</p>
            </div>
          ))}
        </div>
      </div>

      {selected !== null && (
        <div className="modal">
          <video controls autoPlay src={members[selected].video} />
          <button className="close-btn" onClick={() => setSelected(null)}>✖</button>
        </div>
      )}
    </section>
  );
};

export default Carousel;