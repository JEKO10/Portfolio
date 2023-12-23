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
import { useGlobalContext } from "../../utils/context";
import useWindowControls from "../../utils/useWindowControls";

const About = () => {
  const {
    isOpen,
    setIsOpen,
    lastClicked,
    setLastClicked,
    isVisible,
    setIsVisible,
  } = useGlobalContext();

  const {
    minimizeBtnClicked,
    maximizeBtnClicked,
    closeBtnClicked,
    onMouseDownControl,
    onClickControl,
  } = useWindowControls();

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
          onMouseDown={() => onMouseDownControl("min")}
          onClick={() => {
            onClickControl("min");
            setIsVisible({ ...isVisible, about: false });
          }}
          height={22}
          width={25}
          top={0.95}
          right={5.35}
          isClicked={minimizeBtnClicked}
        />
        <MaximizeBtn
          onMouseDown={() => onMouseDownControl("max")}
          onClick={() => onClickControl("max")}
          height={22}
          width={25}
          top={0.95}
          right={3.25}
          isClicked={maximizeBtnClicked}
        />
        <CloseBtn
          onMouseDown={() => onMouseDownControl("close")}
          onClick={() => {
            onClickControl("close");
            setIsOpen({ ...isOpen, about: false });
          }}
          height={22}
          width={25}
          top={0.95}
          right={1}
          isClicked={closeBtnClicked}
        />
        <AboutMeText>
          <p>
            From my earliest memories, computers have been my playground. What
            began as a fascination with gaming evolved into a passion for
            crafting digital experiences. Starting with the foundations of
            programming, I soon found myself immersed in game development and
            eventually navigating the vast world of web development.
          </p>
          <p>
            A quick learner and committed coder, I embrace each day as an
            opportunity for growth. Beyond proficiency, I value collaboration
            and respect for others` time—working seamlessly with senior
            developers.
          </p>
          <p>
            Every day is a new opportunity to learn and grow, and I seize it
            with both hands. My commitment to honing my skills is unwavering—I
            code daily, driven by the excitement of continuous improvement.
            Proficiency is just the beginning; I value your time and work
            harmoniously with senior developers.
          </p>
          <p>
            Beyond the screen, you`ll find me on the basketball or football
            court, exploring the latest movies, or immersing myself in the world
            of video games. This blend of enthusiasm, dedication, and a
            collaborative spirit defines my approach to coding. Let`s build
            something amazing together!
          </p>
        </AboutMeText>
      </AboutFile>
    </Draggable>
  );
};

export default About;
