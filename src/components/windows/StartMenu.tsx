import React from "react";

import { StartContainer } from "../../assets/style/StartMenu.style";
import { useGlobalContext } from "../../context";

const StartMenu: React.FC = () => {
  const { isOpen } = useGlobalContext();

  return <StartContainer position={isOpen.start} />;
};

export default StartMenu;
