import React, { useState } from "react";

import dash from "../assets/images/dash.jpg";
import toolbar from "../assets/images/toolbar.png";
import { Dash, Start, TaskBar, Toolbar } from "../assets/style/Taskbar.style";

const Taskbar = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <TaskBar>
        <div>
          <Start
            isClicked={isClicked}
            onMouseDown={() => setIsClicked(!isClicked)}
          />
          <Dash src={dash} alt="dash" />
        </div>
        <div>
          <Dash src={dash} alt="dash" />
          <Toolbar src={toolbar} alt="clock" />
        </div>
      </TaskBar>
    </>
  );
};

export default Taskbar;
