import React, { useState } from "react";

import dash from "../assets/images/dash.jpg";
import { Dash, Start, TaskBar } from "../assets/style/Taskbar.style";

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
      </TaskBar>
    </>
  );
};

export default Taskbar;
