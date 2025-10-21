// components/Forum.tsx
import React, { useState } from 'react';

const Forum: React.FC = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>('');

  const addComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <section id="forum" className="section forum-section">
      <div className="content-wrapper">
        <h2>Foro de Comentarios</h2>
        <p className="subtitle">Dejá tu opinión o hablá con la comunidad</p>

        <div className="comments">
          {comments.length > 0 ? (
            comments.map((c, i) => <p key={i}>{c}</p>)
          ) : (
            <p className="no-comments">No hay comentarios todavía. ¡Sé el primero!</p>
          )}
        </div>

        <div className="input-area">
          <input
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Escribí tu comentario..."
          />
          <button onClick={addComment}>Enviar</button>
        </div>
      </div>
    </section>
  );
};

export default Forum;