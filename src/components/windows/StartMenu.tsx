import React, { useEffect, useRef } from "react";

import About from "../../assets/images/buttons/aboutStart.jpg";
import Contact from "../../assets/images/buttons/contactStart.jpg";
import Recycle from "../../assets/images/buttons/recycleStart.jpg";
import ShutDown from "../../assets/images/buttons/shutDown.jpg";
import Work from "../../assets/images/buttons/workStart.jpg";
import Dash from "../../assets/images/other/startDash.jpg";
import { StartContainer, StartDash } from "../../assets/style/StartMenu.style";
import { useGlobalContext } from "../../context";

const StartMenu: React.FC = () => {
  const { isOpen, setIsOpen, setIsVisible, isVisible } = useGlobalContext();
  const startRef = useRef<HTMLDivElement>(null);

  const clickOutside = (e: MouseEvent) => {
    if (!startRef.current?.contains(e.target as Node)) {
      setIsOpen({ ...isOpen, start: false });
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", clickOutside, true);
  }, []);

  return (
    <StartContainer position={isOpen.start} ref={startRef}>
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
      <img src={ShutDown} alt="ShutDown" />
    </StartContainer>
  );
};

export default StartMenu;
