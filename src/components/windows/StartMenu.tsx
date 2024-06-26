import React from "react";

import about from "../../assets/images/icons/about.png";
import contact from "../../assets/images/icons/contact.png";
import recycle from "../../assets/images/icons/recycle.png";
import shutDown from "../../assets/images/buttons/shutDown.png";
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

  const handleShutDown = () => {
    setIsShuttingDown(true);

    setTimeout(() => {
      setIsShutDown(true);
    }, 3000);
  };

  return (
    <StartContainer isOpen={isOpen.start} data-no-select="true">
      <StartMenuBtn
        onClick={() => {
          setIsOpen({ ...isOpen, about: true, start: false });
          setIsVisible({ ...isVisible, about: true });
        }}
      >
        <img src={about} alt="AboutStart" />
        <p>About Me</p>
      </StartMenuBtn>
      <StartMenuBtn
        onClick={() => {
          setIsOpen({ ...isOpen, work: true, start: false });
          setIsVisible({ ...isVisible, work: true });
        }}
      >
        <img src={work} alt="WorkStart" />
        <p>My Work</p>
      </StartMenuBtn>
      <StartMenuBtn
        onClick={() => {
          setIsOpen({ ...isOpen, contact: true, start: false });
          setIsVisible({ ...isVisible, contact: true });
        }}
      >
        <img src={contact} alt="ContactStart" />
        <p>Contact</p>
      </StartMenuBtn>
      <StartMenuBtn
        onClick={() => {
          setIsOpen({ ...isOpen, recycle: true, start: false });
          setIsVisible({ ...isVisible, recycle: true });
        }}
      >
        <img src={recycle} alt="RecycleStart" />
        <p>Recycle Bin</p>
      </StartMenuBtn>
      <img src={dash} alt="StartDash" />
      <StartMenuBtn onClick={handleShutDown}>
        <img src={shutDown} alt="ShutDownStart" />
        <p>Shut Down</p>
      </StartMenuBtn>
    </StartContainer>
  );
};

export default StartMenu;
