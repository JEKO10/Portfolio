import React, { useState } from "react";

import { Start } from "../assets/style/Taskbar.style";
import { useGlobalContext } from "../context";

const StartButton = () => {
  const [isClicked, setIsClicked] = useState(false);

  const { setIsOpen, isOpen } = useGlobalContext();

  return (
    <Start
      isClicked={isOpen.start}
      onMouseDown={() => {
        setIsClicked(!isClicked);
        setIsOpen({ ...isOpen, start: !isOpen.start });
      }}
    />
  );
};

export default StartButton;
