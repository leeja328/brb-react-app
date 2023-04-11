import React, { useState, useEffect } from 'react';
import { FaHourglassHalf } from 'react-icons/fa';
import { RxTimer } from 'react-icons/rx';
import './timer.css'

export default function Timers() {
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(seconds => seconds - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id='timerlook'>
      <RxTimer size={24}/>{seconds > 0 ? seconds : 0}
    </div>
  );
}


