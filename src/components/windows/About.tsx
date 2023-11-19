import React from "react";
import Draggable from "react-draggable";

import {
  AboutFile,
  AboutHandle,
  AboutMeText,
} from "../../assets/style/About.style";
import {
  CloseBtn,
  MaximizeBtn,
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
    <Draggable
      defaultPosition={{ x: 200, y: -500 }}
      handle=".handle"
      bounds="body"
    >
      <AboutFile
        onMouseDownCapture={() => setLastClicked("about")}
        lastClicked={lastClicked}
        isVisible={isVisible.about}
        data-no-select="true"
      >
        <AboutHandle className="handle" isVisible={isVisible.about} />
        <MinimizeBtn
          onMouseUp={() => setIsVisible({ ...isVisible, about: false })}
          height={28}
          width={32}
          top={0.75}
          right={5.1}
        />
        <MaximizeBtn height={30} width={34} top={0.68} right={3.05} />
        <CloseBtn
          onMouseUp={() => setIsOpen({ ...isOpen, about: false })}
          height={32}
          width={32.5}
          top={0.6}
          right={0.75}
        />
        <AboutMeText>
          I started playing with computers for as long as I can remember. I
          always loved to play games and I kept wondering how to make my own. I
          started with basic programming, ventured into game development, and
          eventually delved into web development. Since then, I haven`t stopped
          learning and growing in the field of web development.
          <br />
          I have a passion for creating awesome websites and functional web
          applications. I am a quick learner and fully committed to honing my
          skills. I code every day, demonstrating my eagerness to learn and
          improve continuously. I`m not only proficient but also respectful of
          others` time, ensuring I won`t interrupt your senior much. I am always
          open to assimilating new technologies into my skill set.
          <br />
          When I`m not coding, you can find me on the basketball or football
          court, watching movies, or immersed in video games. I bring a blend of
          enthusiasm, dedication, and a collaborative spirit to any coding
          environment.
        </AboutMeText>
      </AboutFile>
    </Draggable>
  );
};

export default About;
