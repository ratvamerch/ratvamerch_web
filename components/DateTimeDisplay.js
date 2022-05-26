import React from 'react';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={`flex flex-col justify-center items-center text-2xl md:text-4xl px-2 md:px-4 ${isDanger ? 'font-bold text-cyan-500' : 'font-bold'}`}>
      <p>{value}</p>
      <span>{type}</span>
    </div>
  );
};

export default DateTimeDisplay;