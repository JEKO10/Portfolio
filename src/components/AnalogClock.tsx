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
    <Clock data-no-select="true">
      <Hours
        style={getRotationStyles(time.getHours() * 30)}
        data-no-select="true"
      />
      <Minutes
        style={getRotationStyles(time.getMinutes() * 6)}
        data-no-select="true"
      />
      <Seconds
        style={getRotationStyles(time.getSeconds() * 6)}
        data-no-select="true"
      />
    </Clock>
  );
};

export default AnalogClock;
