import React, { useState } from "react";

import { Start, TaskBar } from "../assets/style/Taskbar.style";

const Taskbar = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <TaskBar>
        <Start
          isClicked={isClicked}
          onMouseDown={() => setIsClicked(!isClicked)}
        />
      </TaskBar>
    </>
  );
};

export default Taskbar;
