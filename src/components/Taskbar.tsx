import React, { useState } from "react";

import aboutMe from "../assets/images/buttons/aboutTaskbar.png";
import nameImg from "../assets/images/buttons/name.png";
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
import { useGlobalContext } from "../utils/context";
import StartButton from "./StartButton";
import Toolbar from "./Toolbar";

const Taskbar = () => {
  const { isOpen, isVisible, setIsVisible, setIsOpen } = useGlobalContext();

  const [taskbarBtnClicked, setTaskbarBtnClicked] = useState({
    about: false,
    work: false,
    contact: false,
    recycle: false,
    book: false,
    name: false,
  });

  return (
    <>
      <TaskBar data-no-select="true">
        <article>
          <StartButton />
          <Dash src={dash} alt="dash" />
          <Name
            onMouseDown={() =>
              setTaskbarBtnClicked({ ...taskbarBtnClicked, name: true })
            }
            onClick={() => {
              setTaskbarBtnClicked({
                ...taskbarBtnClicked,
                name: false,
              });
              setIsOpen({ ...isOpen, about: true });
            }}
            isClicked={taskbarBtnClicked.name}
          >
            <img src={nameImg} alt="nameImg" />
          </Name>
          {isOpen.about && (
            <About
              onMouseDown={() =>
                setTaskbarBtnClicked({ ...taskbarBtnClicked, about: true })
              }
              onClick={() => {
                setTaskbarBtnClicked({
                  ...taskbarBtnClicked,
                  about: false,
                });
                setIsVisible({ ...isVisible, about: !isVisible.about });
              }}
              isClicked={taskbarBtnClicked.about}
            >
              <img src={aboutMe} alt="aboutMe" />
            </About>
          )}
          {isOpen.work && (
            <Work
              onMouseDown={() =>
                setTaskbarBtnClicked({ ...taskbarBtnClicked, work: true })
              }
              onClick={() => {
                setTaskbarBtnClicked({
                  ...taskbarBtnClicked,
                  work: false,
                });
                setIsVisible({ ...isVisible, work: !isVisible.work });
              }}
              isClicked={taskbarBtnClicked.work}
            />
          )}
          {isOpen.contact && (
            <Contact
              onMouseDown={() =>
                setTaskbarBtnClicked({ ...taskbarBtnClicked, contact: true })
              }
              onClick={() => {
                setTaskbarBtnClicked({
                  ...taskbarBtnClicked,
                  contact: false,
                });
                setIsVisible({ ...isVisible, contact: !isVisible.contact });
              }}
              isClicked={taskbarBtnClicked.contact}
            />
          )}
          {isOpen.book && (
            <Book
              onMouseDown={() =>
                setTaskbarBtnClicked({ ...taskbarBtnClicked, book: true })
              }
              onClick={() => {
                setTaskbarBtnClicked({
                  ...taskbarBtnClicked,
                  book: false,
                });
                setIsVisible({ ...isVisible, book: !isVisible.book });
              }}
              isClicked={taskbarBtnClicked.book}
            />
          )}
          {isOpen.recycle && (
            <Recycle
              onMouseDown={() =>
                setTaskbarBtnClicked({ ...taskbarBtnClicked, recycle: true })
              }
              onClick={() => {
                setTaskbarBtnClicked({
                  ...taskbarBtnClicked,
                  recycle: false,
                });
                setIsVisible({ ...isVisible, recycle: !isVisible.recycle });
              }}
              isClicked={taskbarBtnClicked.recycle}
            />
          )}
        </article>
        <Toolbar />
      </TaskBar>
    </>
  );
};

export default Taskbar;
