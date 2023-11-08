import React, { useEffect, useState } from "react";

import dash from "../assets/images/other/dash.jpg";
import { Dash } from "../assets/style/Taskbar.style";
import {
  Clock,
  ToolbarContainer,
  ToolButton,
} from "../assets/style/Toolbar.style";
import { useGlobalContext } from "../context";

const Toolbar = () => {
  const [time, setTime] = useState(new Date());

  const { setIsOpen, isOpen } = useGlobalContext();

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  const formattedTime = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return (
    <ToolbarContainer>
      <Dash src={dash} alt="dash" data-no-select="true" />
      <ToolButton
        onClick={() => setIsOpen({ ...isOpen, time: !isOpen.time })}
        data-no-select="true"
      />
      <Clock
        onClick={() => setIsOpen({ ...isOpen, time: !isOpen.time })}
        data-no-select="true"
      >
        {formattedTime}
      </Clock>
    </ToolbarContainer>
  );
};

export default Toolbar;
