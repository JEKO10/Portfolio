import React from "react";
import Draggable from "react-draggable";

import { AboutMeText } from "../../assets/style/AboutFile.style";
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
            onMouseUp={() => setIsVisible({ ...isVisible, about: false })}
            height={28}
            width={32}
            top={0.75}
            right={5.1}
          />
          <CloseBtn
            onMouseUp={() => setIsOpen({ ...isOpen, about: false })}
            height={32}
            width={32.5}
            top={0.6}
            right={0.75}
          />
          <AboutMeText>
            I started playing with computers for as long as I can remember. I
            always loved to play games and I kept wondering how to make my own.
            I started with basic programming, through game development, to the
            web development. Since then I haven’t stopped learning web
            development. I have a passion for building awesome websites and
            functional web applications. I am a quick learner and fully
            committed to growing my skills. Additionally, I am always willing to
            keep learning new technologies. When I’m not coding, I play
            basketball or football, watch movies, or play video games.
          </AboutMeText>
        </AboutHandle>
      </AboutFile>
    </Draggable>
  );
};

export default About;
