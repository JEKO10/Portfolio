import React, { useState } from "react";

import { Start } from "../assets/style/Taskbar.style";

const StartButton = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <Start isClicked={isClicked} onMouseDown={() => setIsClicked(!isClicked)} />
  );
};

export default StartButton;
