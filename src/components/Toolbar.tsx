import React, { useEffect, useState } from "react";

import toolBtnImg from "../assets/images/buttons/toolbar.png";
import dash from "../assets/images/other/dash.jpg";
import { Dash } from "../assets/style/Taskbar.style";
import {
  Clock,
  ToolbarContainer,
  ToolButton,
} from "../assets/style/Toolbar.style";
import { useGlobalContext } from "../utils/context";
import { useResize } from "../utils/hooks";

const Toolbar = () => {
  const [time, setTime] = useState(new Date());
  const { setIsOpen, isOpen } = useGlobalContext();
  const innerWidth = useResize();

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
      <Dash src={dash} alt="dash" place="tool" />
      <ToolButton
        onClick={() => {
          setIsOpen({ ...isOpen, time: !isOpen.time });
        }}
      >
        <img src={toolBtnImg} alt="toolButton" />
        <Clock onClick={() => setIsOpen({ ...isOpen, time: !isOpen.time })}>
          {innerWidth < 480 ? formattedTime.slice(0, 2) : formattedTime}
        </Clock>
      </ToolButton>
    </ToolbarContainer>
  );
};

export default Toolbar;
