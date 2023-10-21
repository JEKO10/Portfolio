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
  const { isOpen, setIsOpen, setIsVisible, isVisible, setIsShutDown } =
    useGlobalContext();

  return (
    <StartContainer isOpen={isOpen.start}>
      <article
        onClick={() => {
          setIsOpen({ ...isOpen, about: true, start: false });
          setIsVisible({ ...isVisible, about: true });
        }}
      >
        <img src={About} alt="AboutStart" />
      </article>
      <article
        onClick={() => {
          setIsOpen({ ...isOpen, work: true, start: false });
          setIsVisible({ ...isVisible, work: true });
        }}
      >
        <img src={Work} alt="WorkStart" />
      </article>
      <article
        onClick={() => {
          setIsOpen({ ...isOpen, contact: true, start: false });
          setIsVisible({ ...isVisible, contact: true });
        }}
      >
        <img src={Contact} alt="ContactStart" />
      </article>
      <article
        onClick={() => {
          setIsOpen({ ...isOpen, recycle: true, start: false });
          setIsVisible({ ...isVisible, recycle: true });
        }}
      >
        <img src={Recycle} alt="RecycleStart" />
      </article>
      <img src={Dash} alt="StartDash" />
      <article onClick={() => setIsShutDown(true)}>
        <img src={ShutDown} alt="ShutDownStart" />
      </article>

      {/* <img
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
      <img src={ShutDown} alt="ShutDown" onClick={() => setIsShutDown(true)} /> */}
    </StartContainer>
  );
};

export default StartMenu;
