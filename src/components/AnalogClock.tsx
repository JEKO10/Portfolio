import React, { useEffect, useState } from "react";

import {
  ClockWrapper,
  Hours,
  Minutes,
  Seconds,
} from "../assets/style/AnalogClock.style";
import { Clock } from "../assets/style/Toolbar.style";

const AnalogClock = () => {
  const [rotationStyles, setRotationStyles] = useState({
    sec: { transform: "rotate(-90deg)" },
    min: { transform: "rotate(-90deg)" },
    hour: { transform: "rotate(-90deg)" },
  });

  useEffect(() => {
    const updateClock = () => {
      const date = new Date();
      const secDeg = (date.getSeconds() / 60) * 360 - 90;
      const minDeg = (date.getMinutes() / 60) * 360 - 90;
      const hourDeg = ((date.getHours() % 12) / 12) * 360 - 90;

      setRotationStyles({
        sec: { transform: `rotate(${secDeg}deg)` },
        min: { transform: `rotate(${minDeg}deg)` },
        hour: { transform: `rotate(${hourDeg}deg)` },
      });
    };

    const intervalId = setInterval(updateClock, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <ClockWrapper>
      <Clock>
        <Hours style={rotationStyles.hour} />
        <Minutes style={rotationStyles.min} />
        <Seconds style={rotationStyles.sec} />
      </Clock>
    </ClockWrapper>
  );
};

export default AnalogClock;
