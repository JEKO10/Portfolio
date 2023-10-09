import React from "react";

import About from "../../assets/images/buttons/aboutStart.jpg";
import Contact from "../../assets/images/buttons/contactStart.jpg";
import Recycle from "../../assets/images/buttons/recycleStart.jpg";
import ShutDown from "../../assets/images/buttons/shutDown.jpg";
import Work from "../../assets/images/buttons/workStart.jpg";
import { StartContainer } from "../../assets/style/StartMenu.style";
import { useGlobalContext } from "../../context";

const StartMenu: React.FC = () => {
  const { isOpen } = useGlobalContext();

  return (
    <StartContainer position={isOpen.start}>
      <img src={About} alt="About" />
      <img src={Work} alt="Work" />
      <img src={Contact} alt="Contact" />
      <img src={Recycle} alt="Recycle" />
      <img src={ShutDown} alt="ShutDown" />
    </StartContainer>
  );
};

export default StartMenu;
