import React, { useState } from "react";

import dash from "../assets/images/other/dash.jpg";
import {
  About,
  Book,
  Contact,
  Dash,
  Name,
  Recycle,
  TaskBar,
  Work,
} from "../assets/style/Taskbar.style";
import { useGlobalContext } from "../context";
import StartButton from "./StartButton";
import Toolbar from "./Toolbar";

const Taskbar = () => {
  const { isOpen, isVisible, setIsVisible, setIsOpen } = useGlobalContext();

  const [nameBtnClicked, setNameBtnClicked] = useState(false);

  return (
    <>
      <TaskBar data-no-select="true">
        <div>
          <StartButton />
          <Dash src={dash} alt="dash" />
          <Name
            onMouseDown={() => setNameBtnClicked(true)}
            onMouseUp={() => setNameBtnClicked(false)}
            onClick={() => {
              setIsOpen({ ...isOpen, about: !isOpen.about });
              setIsVisible({ ...isVisible, about: true });
            }}
            isClicked={nameBtnClicked}
          />
          {isOpen.about && (
            <About
              onClick={() =>
                setIsVisible({ ...isVisible, about: !isVisible.about })
              }
            />
          )}
          {isOpen.work && (
            <Work
              onClick={() =>
                setIsVisible({ ...isVisible, work: !isVisible.work })
              }
            />
          )}
          {isOpen.contact && (
            <Contact
              onClick={() =>
                setIsVisible({ ...isVisible, contact: !isVisible.contact })
              }
            />
          )}
          {isOpen.book && (
            <Book
              onClick={() =>
                setIsVisible({ ...isVisible, book: !isVisible.book })
              }
            />
          )}
          {isOpen.recycle && (
            <Recycle
              onClick={() =>
                setIsVisible({ ...isVisible, recycle: !isVisible.recycle })
              }
            />
          )}
        </div>
        <Toolbar />
      </TaskBar>
    </>
  );
};

export default Taskbar;
