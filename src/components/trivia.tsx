import React, { useState } from 'react';

const Trivia: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const questions = [
    { question: "¿Qué integrante de Mala Señal eres?", options: ["El bromista", "El estratega", "El random"], answer: 0 },
    // Agrega más preguntas
  ];

  const handleAnswer = (index: number) => {
    if (index === questions[currentQuestion].answer) setScore(score + 1);
    if (currentQuestion < questions.length - 1) setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <section id="trivia" className="section">
      <h2>Trivia de la Comunidad</h2>
      <p>Pregunta {currentQuestion + 1}: {questions[currentQuestion].question}</p>
      {questions[currentQuestion].options.map((opt, i) => (
        <button key={i} onClick={() => handleAnswer(i)}>{opt}</button>
      ))}
      <p>Puntuación: {score}</p>
    </section>
  );
};

export default Trivia;