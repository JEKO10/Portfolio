import React from "react";

import aboutMe from "../assets/images/buttons/aboutTaskbar.png";
import bookImg from "../assets/images/buttons/bookTaskbar.png";
import contactImg from "../assets/images/buttons/contactTaskbar.png";
import nameImg from "../assets/images/buttons/name.png";
import recycleImg from "../assets/images/buttons/recycleTaskbar.png";
import workImg from "../assets/images/buttons/workTaskbar.png";
import dash from "../assets/images/other/dash.jpg";
import { Dash, TaskBar } from "../assets/style/Taskbar.style";
import { useGlobalContext } from "../utils/context";
import StartButton from "./StartButton";
import TaskbarBtn from "./TaskbarBtns";
import Toolbar from "./Toolbar";

const Taskbar = () => {
  const { isOpen } = useGlobalContext();

  return (
    <>
      <TaskBar data-no-select="true">
        <article>
          <StartButton />
          <Dash src={dash} alt="dash" />
          <TaskbarBtn iconName="name" imgSource={nameImg} />
          {isOpen.about && <TaskbarBtn iconName="about" imgSource={aboutMe} />}
          {isOpen.work && <TaskbarBtn iconName="work" imgSource={workImg} />}
          {isOpen.contact && (
            <TaskbarBtn iconName="contact" imgSource={contactImg} />
          )}
          {isOpen.recycle && (
            <TaskbarBtn iconName="recycle" imgSource={recycleImg} />
          )}
          {isOpen.book && <TaskbarBtn iconName="book" imgSource={bookImg} />}
        </article>
        <Toolbar />
      </TaskBar>
    </>
  );
};

export default Taskbar;
