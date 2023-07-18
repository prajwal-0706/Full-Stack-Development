import React, { useContext, useEffect, useState } from 'react';
import Seat from './Seat/Seat';
import './Booking.css';
import { SeatNumberContext } from '../../Context api/Seat';

const Booking = () => {
  const [seatNumber, setSeatNumber] = useContext(SeatNumberContext);
  // const [seatNumber, setSeatNumber] = useState(undefined);

  return (
    <div className="booking__container">
      <div className="booking__container__header">
        <h1>THE FLASH</h1>
        <p>HINDI (U/A) ROMANCE</p>
      </div>
      <div className="booking__container__description">
        <div className="booking__container__description__seat">
          <div className="booking__container__description__box booked"></div>
          <p>Booked</p>
        </div>
        <div className="booking__container__description__seat">
          <div className="booking__container__description__box unbooked"></div>
          <p>Unbooked</p>
        </div>
        <div className="booking__container__description__seat">
          <div className="booking__container__description__box selected"></div>
          <p>Selected</p>
        </div>
      </div>
      <div className="booking__container__seats">
        {seatNumber?.map((seat, index) => (
          <Seat key={index} seat={seat} />
        ))}
      </div>
      <div className="booking__container_screen">Screen this way</div>
      <div className="booking__container__bill">
        <div className="booking__container__bill__price">
          <p>Price</p>
          <p>Rs. 150</p>
        </div>
        <div className="booking__container__bill__seats">
          <p>Seats</p>
          <p>1</p>
        </div>
        <div className="booking__container__bill__submit">
          <button>Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
