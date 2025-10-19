import React, { useState } from 'react';

const Poll: React.FC = () => {
  const [votes, setVotes] = useState({ option1: 0, option2: 0 });

  const vote = (option: string) => {
    setVotes({ ...votes, [option]: votes[option as keyof typeof votes] + 1 });
  };

  return (
    <section id="poll" className="section">
      <h2>Encuesta en Tiempo Real</h2>
      <p>¿Qué juego jugamos después?</p>
      <button onClick={() => vote('option1')}>Juego 1 ({votes.option1})</button>
      <button onClick={() => vote('option2')}>Juego 2 ({votes.option2})</button>
    </section>
  );
};

export default Poll;