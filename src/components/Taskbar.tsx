import React, { useState } from "react";

import aboutMe from "../assets/images/buttons/aboutTaskbar.png";
import bookImg from "../assets/images/buttons/bookTaskbar.png";
import contactImg from "../assets/images/buttons/contactTaskbar.png";
import nameImg from "../assets/images/buttons/name.png";
import recycleImg from "../assets/images/buttons/recycleTaskbar.png";
import workImg from "../assets/images/buttons/workTaskbar.png";
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
            <img src={nameImg} alt="name" />
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
            >
              <img src={workImg} alt="work" />
            </Work>
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
            >
              <img src={contactImg} alt="contact" />
            </Contact>
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
            >
              <img src={bookImg} alt="book" />
            </Book>
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
            >
              <img src={recycleImg} alt="recycle" />
            </Recycle>
          )}
        </article>
        <Toolbar />
      </TaskBar>
    </>
  );
};

export default Taskbar;
