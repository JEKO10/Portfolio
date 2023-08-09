import React from "react";
import Draggable from "react-draggable";

import {
  AboutFile,
  AboutHandle,
  CloseBtn,
  MinimizeBtn,
} from "../../assets/style/Files.style";
import { useGlobalContext } from "../../context";

const About = () => {
  const {
    isOpen,
    setIsOpen,
    lastClicked,
    setLastClicked,
    isVisible,
    setIsVisible,
  } = useGlobalContext();

  return (
    <Draggable defaultPosition={{ x: 100, y: -400 }} handle=".handle">
      <AboutFile
        onMouseDownCapture={() => setLastClicked("about")}
        lastClicked={lastClicked}
        isVisible={isVisible.about}
      >
        <AboutHandle className="handle">
          <MinimizeBtn
            onMouseDown={() => setIsVisible({ ...isVisible, about: false })}
            height={28}
            width={32}
            top={0.75}
            right={5.1}
          />
          <CloseBtn
            onMouseDown={() => setIsOpen({ ...isOpen, about: false })}
            height={32}
            width={32.5}
            top={0.6}
            right={0.75}
          />
        </AboutHandle>
      </AboutFile>
    </Draggable>
  );
};

export default About;
