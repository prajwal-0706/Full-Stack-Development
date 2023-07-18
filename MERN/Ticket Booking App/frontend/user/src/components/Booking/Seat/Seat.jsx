import React from 'react';
import './Seat.css';

const Seat = ({ seat }) => {
  return <div className="seatContainer">{seat.seatNo}</div>;
};

export default Seat;
