import React from 'react';
import { Calendar as ReactCalendar } from 'react-calendar'; // Instala: npm install react-calendar

const Calendar: React.FC = () => {
  return (
    <section id="calendar" className="section">
      <h2>Calendario de Streams</h2>
      <ReactCalendar />
      <p>Eventos: Stream el 15/10 a las 20:00 - Colaboración con X.</p>
    </section>
  );
};

export default Calendar;