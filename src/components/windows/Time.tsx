import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";

import { TimeHandle, TimeModal } from "../../assets/style/Time.style";
import { useGlobalContext } from "../../utils/context";
import TimeButtons from "../time/TimeButtons";
import TimeDetails from "../time/TimeDetails";

const Time = () => {
  const { lastClicked, setLastClicked } = useGlobalContext();

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <Draggable
      defaultPosition={{ x: 800, y: -400 }}
      handle=".handle"
      bounds=".home"
    >
      <TimeModal
        onMouseDownCapture={() => setLastClicked("time")}
        lastClicked={lastClicked}
        data-no-select="true"
      >
        <TimeHandle className="handle" />
        <TimeDetails time={time} />
        <TimeButtons />
      </TimeModal>
    </Draggable>
  );
};

export default Time;
