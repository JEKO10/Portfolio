import React from "react";

import shutDown from "../../assets/images/buttons/shutDown.png";
import about from "../../assets/images/icons/about.png";
import contact from "../../assets/images/icons/contact.png";
import recycle from "../../assets/images/icons/recycle.png";
import work from "../../assets/images/icons/work.png";
import dash from "../../assets/images/other/startDash.jpg";
import {
  StartContainer,
  StartMenuBtn
} from "../../assets/style/StartMenu.style";
import { useGlobalContext } from "../../utils/context";

const StartMenu: React.FC = () => {
  const {
    isOpen,
    setIsOpen,
    setIsVisible,
    isVisible,
    setIsShutDown,
    setIsShuttingDown
  } = useGlobalContext();
  const startData = [
    { name: "about", src: about, alt: "aboutStart", label: "About Me" },
    { name: "work", src: work, alt: "workStart", label: "My Work" },
    { name: "contact", src: contact, alt: "contactStart", label: "Contact" },
    { name: "recycle", src: recycle, alt: "RecycleStart", label: "Recycle Bin" }
  ];

  const handleShutDown = () => {
    setIsShuttingDown(true);

    setTimeout(() => {
      setIsShutDown(true);
    }, 3000);
  };

  return (
    <StartContainer isOpen={isOpen.start} data-no-select="true">
      {startData.map((startBtn) => (
        <StartMenuBtn
          onClick={() => {
            setIsOpen({ ...isOpen, [startBtn.name]: true, start: false });
            setIsVisible({ ...isVisible, [startBtn.name]: true });
          }}
        >
          <img src={startBtn.src} alt={startBtn.alt} />
          <p>{startBtn.label}</p>
        </StartMenuBtn>
      ))}
      <img src={dash} alt="StartDash" />
      <StartMenuBtn onClick={handleShutDown}>
        <img src={shutDown} alt="ShutDownStart" />
        <p>Shut Down</p>
      </StartMenuBtn>
    </StartContainer>
  );
};

export default StartMenu;
