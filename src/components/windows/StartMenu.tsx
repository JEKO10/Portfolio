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
  const { isOpen } = useGlobalContext();

  return (
    <StartContainer position={isOpen.start}>
      <img src={About} alt="About" />
      <img src={Work} alt="Work" />
      <img src={Contact} alt="Contact" />
      <img src={Recycle} alt="Recycle" />
      <StartDash src={Dash} alt="StartDash" />
      <img src={ShutDown} alt="ShutDown" />
    </StartContainer>
  );
};

export default StartMenu;
