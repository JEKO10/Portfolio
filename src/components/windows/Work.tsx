import React from "react";
import Draggable from "react-draggable";

import basket from "../../assets/images/icons/Basket.png";
import moviexd from "../../assets/images/icons/Moviexd.png";
import travel from "../../assets/images/icons/Travel.png";
import walkmate from "../../assets/images/icons/Walkmate.png";
import {
  CloseBtn,
  MaximizeBtn,
  MinimizeBtn,
} from "../../assets/style/Files.style";
import { Project, WorkFile, WorkHandle } from "../../assets/style/Work.style";
import { useGlobalContext } from "../../context";

const Work = () => {
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
      defaultPosition={{ x: 100, y: -430 }}
      handle=".handle"
      bounds="body"
    >
      <WorkFile
        onMouseDownCapture={() => setLastClicked("work")}
        isVisible={isVisible.work}
        lastClicked={lastClicked}
        data-no-select="true"
      >
        <WorkHandle className="handle" isVisible={isVisible.work} />
        <MinimizeBtn
          onMouseUp={() => setIsVisible({ ...isVisible, work: false })}
          height={27}
          width={29}
          top={0.7}
          right={4.7}
        />
        <MaximizeBtn height={28} width={32} top={0.68} right={2.78} />
        <CloseBtn
          onMouseUp={() => setIsOpen({ ...isOpen, work: false })}
          height={30}
          width={30}
          top={0.6}
          right={0.68}
        />
        <article>
          <Project top={17} left={20.5} project={walkmate} />
          <Project
            top={17}
            left={34.1}
            project={moviexd}
            style={{ width: "109px" }}
          />
          <Project top={29.6} left={20.5} project={travel} />
          <Project top={29.6} left={33.5} project={basket} />
        </article>
      </WorkFile>
    </Draggable>
  );
};

export default Work;
