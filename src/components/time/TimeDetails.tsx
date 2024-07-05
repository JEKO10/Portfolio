import React from "react";

import {
  DigitalClock,
  Month,
  TimeZone,
  Year
} from "../../assets/style/Time.style";
import AnalogClock from "./AnalogClock";

type TimeDetailsProps = {
  time: Date;
};

const TimeDetails: React.FC<TimeDetailsProps> = ({ time }) => {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const full = time.toLocaleDateString("en-US", { timeZoneName: "long" });

  const formattedTime = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });

  return (
    <>
      <article>
        <Month>{month[time.getMonth()]}</Month>
        <Year>2023</Year>
        <TimeZone>{full.slice(10)}</TimeZone>
      </article>
      <article>
        <AnalogClock />
        <DigitalClock>{formattedTime}</DigitalClock>
      </article>
    </>
  );
};

export default TimeDetails;
