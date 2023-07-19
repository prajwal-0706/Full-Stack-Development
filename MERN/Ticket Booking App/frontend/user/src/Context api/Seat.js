import React, { createContext, useState } from 'react';

export const SeatNumberContext = createContext();

export const SeatNumberProvider = ({ children }) => {
  const [SeatNumber, setSeatNumber] = useState(() => {
    const newArray = [];

    let j = 0,
      k = 0;
    for (let i = 0; i < 200; i++) {
      if ((j + 1) % 20 === 0) {
        j = 0;
      }
      if ((i + 1) % 20 === 0) {
        k++;
      }

      let obj = {
        id: i,
        seatNo: `${String.fromCharCode(65 + k)}${j + 1}`,
        isBooked: false,
      };

      j++;
      newArray.push(obj);
    }

    return newArray;
  });

  return (
    <SeatNumberContext.Provider value={[SeatNumber, setSeatNumber]}>
      {children}
    </SeatNumberContext.Provider>
  );
};
