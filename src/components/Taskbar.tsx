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
              onMouseDown={() => setNameBtnClicked(true)}
              onMouseUp={() => setNameBtnClicked(false)}
              onClick={() =>
                setIsVisible({ ...isVisible, about: !isVisible.about })
              }
              isClicked={nameBtnClicked}
            />
          )}
          {isOpen.work && (
            <Work
              onMouseDown={() => setNameBtnClicked(true)}
              onMouseUp={() => setNameBtnClicked(false)}
              onClick={() =>
                setIsVisible({ ...isVisible, work: !isVisible.work })
              }
              isClicked={nameBtnClicked}
            />
          )}
          {isOpen.contact && (
            <Contact
              onMouseDown={() => setNameBtnClicked(true)}
              onMouseUp={() => setNameBtnClicked(false)}
              onClick={() =>
                setIsVisible({ ...isVisible, contact: !isVisible.contact })
              }
              isClicked={nameBtnClicked}
            />
          )}
          {isOpen.book && (
            <Book
              onMouseDown={() => setNameBtnClicked(true)}
              onMouseUp={() => setNameBtnClicked(false)}
              onClick={() =>
                setIsVisible({ ...isVisible, book: !isVisible.book })
              }
              isClicked={nameBtnClicked}
            />
          )}
          {isOpen.recycle && (
            <Recycle
              onMouseDown={() => setNameBtnClicked(true)}
              onMouseUp={() => setNameBtnClicked(false)}
              onClick={() =>
                setIsVisible({ ...isVisible, recycle: !isVisible.recycle })
              }
              isClicked={nameBtnClicked}
            />
          )}
        </div>
        <Toolbar />
      </TaskBar>
    </>
  );
};

export default Taskbar;
