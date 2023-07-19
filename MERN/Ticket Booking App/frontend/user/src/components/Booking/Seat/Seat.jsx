import React from 'react';
import './Seat.css';

const Seat = ({ seat, split }) => {
  return (
    <div className={`seatContainer ${split ? 'style-for-row' : ''}`}>
      {seat.seatNo}
    </div>
  );
};

export default Seat;
