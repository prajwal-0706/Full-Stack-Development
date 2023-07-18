import React, { createContext, useState } from 'react';

export const SeatNumberContext = createContext();

export const SeatNumberProvider = ({ children }) => {
  const [SeatNumber, setSeatNumber] = useState(() => {
    const newArray = [];

    for (let i = 1; i <= 200; i++) {
      let obj = {
        id: i,
        seatNo: `${String.fromCharCode(65 + i)} ${i}`,
        isBooked: false,
      };

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
