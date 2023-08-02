import React from "react";
import Draggable from "react-draggable";

import { AboutFile, CloseBtn } from "../../assets/style/Files.style";
import { useGlobalContext } from "../../context";

const About = () => {
  const { isOpen, setIsOpen } = useGlobalContext();

  return (
    <Draggable defaultPosition={{ x: 100, y: -400 }}>
      <AboutFile>
        <CloseBtn
          onClick={() => setIsOpen({ ...isOpen, about: false })}
          height={30}
          width={30}
          top={0.7}
          right={0.8}
        />
      </AboutFile>
    </Draggable>
  );
};

export default About;
