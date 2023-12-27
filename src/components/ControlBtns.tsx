import React from "react";

import close from "../assets/images/buttons/close.png";
import maximize from "../assets/images/buttons/maximize.png";
import minimize from "../assets/images/buttons/minimize.jpg";
import {
  ControlBtnsContainer,
  ControlButton,
  MinimizeBtn,
} from "../assets/style/Files.style";
import { useGlobalContext } from "../utils/context";

const ControlBtns = ({ iconName }: { iconName: string }) => {
  const { isOpen, setIsOpen, isVisible, setIsVisible } = useGlobalContext();

  return (
    <ControlBtnsContainer iconName={iconName}>
      <div>
        <MinimizeBtn
          onClick={() => setIsVisible({ ...isVisible, [iconName]: false })}
        >
          <img src={minimize} alt="minimize" />
        </MinimizeBtn>
        <ControlButton>
          <img src={maximize} alt="maximize" />
        </ControlButton>
      </div>
      <ControlButton
        onClick={() => setIsOpen({ ...isOpen, [iconName]: false })}
      >
        <img src={close} alt="close" />
      </ControlButton>
    </ControlBtnsContainer>
  );
};

export default ControlBtns;
