import React, { useState } from 'react';
import './Seat.css';

const Seat = ({ seat, split }) => {
  const [Selected, setSelected] = useState(false);

  const clickHandler = () => {
    setSelected((prev) => !prev);
  };

  return (
    <div
      onClick={clickHandler}
      className={`seatContainer ${Selected ? 'selected' : ''} ${
        split ? 'style-for-row' : ''
      }`}
    >
      {seat.seatNo}
    </div>
  );
};

export default Seat;
