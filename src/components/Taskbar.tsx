import React from "react";

import aboutMe from "../assets/images/icons/about.png";
import bookImg from "../assets/images/icons/book.png";
import contactImg from "../assets/images/icons/contact.png";
import recycleImg from "../assets/images/icons/recycle.png";
import workImg from "../assets/images/icons/work.png";
import dash from "../assets/images/other/dash.jpg";
import { Dash, TaskBar } from "../assets/style/Taskbar.style";
import { useGlobalContext } from "../utils/context";
import StartButton from "./StartButton";
import TaskbarBtn from "./TaskbarBtn";
import Toolbar from "./Toolbar";

const Taskbar = () => {
  const { isOpen } = useGlobalContext();

  const buttons = [
    {
      iconName: "about",
      imgSource: aboutMe,
      label: "About me",
      isVisible: isOpen.about
    },
    {
      iconName: "work",
      imgSource: workImg,
      label: "Work",
      isVisible: isOpen.work
    },
    {
      iconName: "contact",
      imgSource: contactImg,
      label: "Contact",
      isVisible: isOpen.contact
    },
    {
      iconName: "recycle",
      imgSource: recycleImg,
      label: "Recycle Bin",
      isVisible: isOpen.recycle
    },
    {
      iconName: "book",
      imgSource: bookImg,
      label: "Book",
      isVisible: isOpen.book
    }
  ];

  return (
    <>
      <TaskBar data-no-select="true">
        <article>
          <StartButton />
          <Dash src={dash} alt="dash" />
          <TaskbarBtn iconName="name" imgSource="" label="Aleksa Bubanja" />
          {buttons.map(
            (btn) =>
              btn.isVisible && (
                <TaskbarBtn
                  key={btn.iconName}
                  iconName={btn.iconName}
                  imgSource={btn.imgSource}
                  label={btn.label}
                />
              )
          )}
        </article>
        <Toolbar />
      </TaskBar>
    </>
  );
};

export default Taskbar;
