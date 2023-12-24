import React from "react";

import close from "../../assets/images/buttons/close.png";
import maximize from "../../assets/images/buttons/maximize.png";
import minimize from "../../assets/images/buttons/minimize.jpg";
import {
  CloseBtn,
  ControlBtnsContainer,
  MaximizeBtn,
  MinimizeBtn,
} from "../../assets/style/Files.style";
import { useGlobalContext } from "../../utils/context";
import useWindowControls from "../../utils/useWindowControls";

const ControlBtns = ({ iconName }: { iconName: string }) => {
  const { isOpen, setIsOpen, isVisible, setIsVisible } = useGlobalContext();

  const {
    minimizeBtnClicked,
    maximizeBtnClicked,
    closeBtnClicked,
    onMouseDownControl,
    onClickControl,
  } = useWindowControls();

  return (
    <ControlBtnsContainer iconName={iconName}>
      <div>
        <MinimizeBtn
          onMouseDown={() => onMouseDownControl("min")}
          onClick={() => {
            onClickControl("min");
            setIsVisible({ ...isVisible, [iconName]: false });
          }}
          isClicked={minimizeBtnClicked}
        >
          <img src={minimize} alt="minimize" />
        </MinimizeBtn>
        <MaximizeBtn
          onMouseDown={() => onMouseDownControl("max")}
          onClick={() => onClickControl("max")}
          isClicked={maximizeBtnClicked}
        >
          <img src={maximize} alt="maximize" />
        </MaximizeBtn>
      </div>
      <CloseBtn
        onMouseDown={() => onMouseDownControl("close")}
        onClick={() => {
          onClickControl("close");
          setIsOpen({ ...isOpen, [iconName]: false });
        }}
        isClicked={closeBtnClicked}
      >
        <img src={close} alt="close" />
      </CloseBtn>
    </ControlBtnsContainer>
  );
};

export default ControlBtns;
