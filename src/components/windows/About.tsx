import React from "react";
import Draggable from "react-draggable";

import {
  AboutFile,
  AboutHandle,
  AboutMeText
} from "../../assets/style/About.style";
import { useGlobalContext } from "../../utils/context";
import { useLoadingTimer } from "../../utils/hooks";
import ControlBtns from "../ControlBtns";

const About = () => {
  const { lastClicked, setLastClicked, isVisible } = useGlobalContext();
  const { isLoading } = useLoadingTimer();

  return (
    <>
      <Draggable
        defaultPosition={{ x: 200, y: -500 }}
        handle=".handle"
        bounds="body"
        cancel=".handle *"
      >
        <AboutFile
          onMouseDownCapture={() => setLastClicked("about")}
          isLoading={isLoading}
          lastClicked={lastClicked}
          isVisible={isVisible.about}
          data-no-select="true"
        >
          <AboutHandle className="handle" isVisible={isVisible.about}>
            <ControlBtns iconName="about" />
          </AboutHandle>
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
              court, exploring the latest movies, or immersing myself in the
              world of video games. This blend of enthusiasm, dedication, and a
              collaborative spirit defines my approach to coding. Let`s build
              something amazing together!
            </p>
          </AboutMeText>
        </AboutFile>
      </Draggable>
    </>
  );
};

export default About;
