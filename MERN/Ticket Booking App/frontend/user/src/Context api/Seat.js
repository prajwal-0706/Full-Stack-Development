import React, { createContext, useState } from 'react';

export const SeatNumberContext = createContext();

export const SeatNumberProvider = ({ children }) => {
  const [SeatNumber, setSeatNumber] = useState(() => {
    const newArray = [];

    let j = 0,
      k = 0;
    for (let i = 1; i <= 160; i++) {
      if (j % 20 === 0) {
        j = 0;
      }

      let obj = {
        id: i,
        seatNo: `${String.fromCharCode(65 + k)}${j + 1}`,
        isBooked: false,
      };
      if (i % 20 === 0) {
        k++;
      }
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
