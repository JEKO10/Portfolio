import React from "react";

import About from "../../assets/images/buttons/aboutStart.jpg";
import Contact from "../../assets/images/buttons/contactStart.jpg";
import Recycle from "../../assets/images/buttons/recycleStart.jpg";
import ShutDown from "../../assets/images/buttons/shutDown.jpg";
import Work from "../../assets/images/buttons/workStart.jpg";
import Dash from "../../assets/images/other/startDash.jpg";
import { StartContainer, StartDash } from "../../assets/style/StartMenu.style";
import { useGlobalContext } from "../../context";

const StartMenu: React.FC = () => {
  const { isOpen, setIsOpen, setIsVisible, isVisible, setIsShutDown } =
    useGlobalContext();

  return (
    <StartContainer position={isOpen.start}>
      <img
        src={About}
        alt="About"
        onClick={() => {
          setIsOpen({ ...isOpen, about: true, start: false });
          setIsVisible({ ...isVisible, about: true });
        }}
      />
      <img
        src={Work}
        alt="Work"
        onClick={() => {
          setIsOpen({ ...isOpen, work: true, start: false });
          setIsVisible({ ...isVisible, work: true });
        }}
      />
      <img
        src={Contact}
        alt="Contact"
        onClick={() => {
          setIsOpen({ ...isOpen, contact: true, start: false });
          setIsVisible({ ...isVisible, contact: true });
        }}
      />
      <img
        src={Recycle}
        alt="Recycle"
        onClick={() => {
          setIsOpen({ ...isOpen, recycle: true, start: false });
          setIsVisible({ ...isVisible, recycle: true });
        }}
      />
      <StartDash src={Dash} alt="StartDash" />
      <img src={ShutDown} alt="ShutDown" onClick={() => setIsShutDown(true)} />
    </StartContainer>
  );
};

export default StartMenu;
