import {useState, useEffect} from 'react';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div className={`flex flex-col justify-center items-center text-2xl md:text-4xl px-1 md:px-4 ${isDanger ? 'font-bold text-cyan-500' : 'font-bold'}`}>
      {!mounted ?
        null 
        :
        <p>{value}</p>
      }
      <span>{type}</span>
    </div>
  );
};

export default DateTimeDisplay;