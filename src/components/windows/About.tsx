import React from "react";
import Draggable from "react-draggable";

import {
  AboutFile,
  AboutHandle,
  CloseBtn,
} from "../../assets/style/Files.style";
import { useGlobalContext } from "../../context";

const About = () => {
  const { isOpen, setIsOpen, lastClicked, setLastClicked, isVisible } =
    useGlobalContext();

  return (
    <Draggable defaultPosition={{ x: 100, y: -400 }} handle=".handle">
      <AboutFile
        onMouseDownCapture={() => setLastClicked("about")}
        lastClicked={lastClicked}
        isVisible={isVisible.about}
      >
        <AboutHandle className="handle">
          <CloseBtn
            onMouseDownCapture={() => setIsOpen({ ...isOpen, about: false })}
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
