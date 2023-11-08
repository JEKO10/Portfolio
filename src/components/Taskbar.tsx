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
          <Dash src={dash} alt="dash" data-no-select="true" />
          <Name
            onClick={() => setIsOpen({ ...isOpen, about: true })}
            data-no-select="true"
          />
          {isOpen.about && (
            <About
              onClick={() =>
                setIsVisible({ ...isVisible, about: !isVisible.about })
              }
              data-no-select="true"
            />
          )}
          {isOpen.work && (
            <Work
              onClick={() =>
                setIsVisible({ ...isVisible, work: !isVisible.work })
              }
              data-no-select="true"
            />
          )}
          {isOpen.contact && (
            <Contact
              onClick={() =>
                setIsVisible({ ...isVisible, contact: !isVisible.contact })
              }
              data-no-select="true"
            />
          )}
          {isOpen.book && (
            <Book
              onClick={() =>
                setIsVisible({ ...isVisible, book: !isVisible.book })
              }
              data-no-select="true"
            />
          )}
          {isOpen.recycle && (
            <Recycle
              onClick={() =>
                setIsVisible({ ...isVisible, recycle: !isVisible.recycle })
              }
              data-no-select="true"
            />
          )}
        </div>
        <Toolbar />
      </TaskBar>
    </>
  );
};

export default Taskbar;
