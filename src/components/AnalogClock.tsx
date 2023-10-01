import React, { useEffect, useState } from "react";

import {
  Clock,
  Hours,
  Minutes,
  Seconds,
} from "../assets/style/AnalogClock.style";

const AnalogClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const getRotationStyles = (degrees: number) => {
    return {
      transform: `rotate(${degrees}deg)`,
    };
  };

  return (
    <Clock>
      <Hours style={getRotationStyles(time.getHours() * 30)} />
      <Minutes style={getRotationStyles(time.getMinutes() * 6)} />
      <Seconds style={getRotationStyles(time.getSeconds() * 6)} />
    </Clock>
  );
};

export default AnalogClock;
