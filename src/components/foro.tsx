import React, { useState } from 'react';

const Forum: React.FC = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState('');

  const addComment = () => {
    setComments([...comments, newComment]);
    setNewComment('');
  };

  return (
    <section id="forum" className="section">
      <h2>Foro de Comentarios</h2>
      <div className="comments">
        {comments.map((c, i) => <p key={i}>{c}</p>)}
      </div>
      <input value={newComment} onChange={(e) => setNewComment(e.target.value)} placeholder="Escribe un comentario..." />
      <button onClick={addComment}>Enviar</button>
    </section>
  );
};

export default Forum;