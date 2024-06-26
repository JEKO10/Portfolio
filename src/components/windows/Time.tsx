import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";

import { TimeHandle, TimeModal } from "../../assets/style/Time.style";
import { useGlobalContext } from "../../utils/context";
import FileLoader from "../../utils/FileLoader";
import { useLoadingTimer } from "../../utils/hooks";
import TimeButtons from "../time/TimeButtons";
import TimeDetails from "../time/TimeDetails";

const Time = () => {
  const { lastClicked, setLastClicked } = useGlobalContext();
  const [time, setTime] = useState(new Date());
  const { isLoading } = useLoadingTimer();

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <>
      <Draggable
        defaultPosition={{ x: 800, y: -400 }}
        handle=".handle"
        bounds=".home"
      >
        <TimeModal
          onMouseDownCapture={() => setLastClicked("time")}
          isLoading={isLoading}
          lastClicked={lastClicked}
          data-no-select="true"
        >
          <TimeHandle className="handle" />
          <TimeDetails time={time} />
          <TimeButtons />
        </TimeModal>
      </Draggable>
      {isLoading && <FileLoader top={109.2} left={102.5} isTime={true} />}
    </>
  );
};

export default Time;
