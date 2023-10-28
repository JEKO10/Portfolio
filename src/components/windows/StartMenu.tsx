import React from "react";

import About from "../../assets/images/buttons/aboutStart.png";
import Contact from "../../assets/images/buttons/contactStart.png";
import Recycle from "../../assets/images/buttons/recycleStart.png";
import ShutDown from "../../assets/images/buttons/shutDown.png";
import Work from "../../assets/images/buttons/workStart.png";
import Dash from "../../assets/images/other/startDash.jpg";
import { StartContainer } from "../../assets/style/StartMenu.style";
import { useGlobalContext } from "../../context";

const StartMenu: React.FC = () => {
  const {
    isOpen,
    setIsOpen,
    setIsVisible,
    isVisible,
    setIsShutDown,
    setIsShuttingDown,
  } = useGlobalContext();

  const handleShutDown = () => {
    setIsShuttingDown(true);

    setTimeout(() => {
      setIsShutDown(true);
    }, 3000);
  };

  return (
    <StartContainer isOpen={isOpen.start}>
      <article
        onClick={() => {
          setIsOpen({ ...isOpen, about: true, start: false });
          setIsVisible({ ...isVisible, about: true });
        }}
      >
        <img src={About} alt="AboutStart" />
        <p>About Me</p>
      </article>
      <article
        onClick={() => {
          setIsOpen({ ...isOpen, work: true, start: false });
          setIsVisible({ ...isVisible, work: true });
        }}
      >
        <img src={Work} alt="WorkStart" />
        <p>My Work</p>
      </article>
      <article
        onClick={() => {
          setIsOpen({ ...isOpen, contact: true, start: false });
          setIsVisible({ ...isVisible, contact: true });
        }}
      >
        <img src={Contact} alt="ContactStart" />
        <p>Contact</p>
      </article>
      <article
        onClick={() => {
          setIsOpen({ ...isOpen, recycle: true, start: false });
          setIsVisible({ ...isVisible, recycle: true });
        }}
      >
        <img src={Recycle} alt="RecycleStart" />
        <p>Recycle Bin</p>
      </article>
      <img src={Dash} alt="StartDash" />
      <article onClick={handleShutDown}>
        <img src={ShutDown} alt="ShutDownStart" />
        <p>Shut Down</p>
      </article>
    </StartContainer>
  );
};

export default StartMenu;
