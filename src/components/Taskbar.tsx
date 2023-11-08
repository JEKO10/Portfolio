import React from "react";

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

  return (
    <>
      <TaskBar data-no-select="true">
        <div>
          <StartButton />
          <Dash src={dash} alt="dash" />
          <Name onClick={() => setIsOpen({ ...isOpen, about: true })} />
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
