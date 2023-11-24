import React, { useState } from "react";
import Draggable from "react-draggable";

import basket from "../../assets/images/icons/Basket.png";
import basketClicked from "../../assets/images/icons/basketClicked.png";
import moviexd from "../../assets/images/icons/Moviexd.png";
import moviexdClicked from "../../assets/images/icons/moviexdClicked.png";
import travel from "../../assets/images/icons/Travel.png";
import travelClicked from "../../assets/images/icons/travelClicked.png";
import walkmateClicked from "../../assets/images/icons/walkClicked.png";
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
  const [isClicked, setIsClicked] = useState({
    walkmate: false,
    moviexd: false,
    travel: false,
    basket: false,
  });

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
          <Project
            project={walkmate}
            clickedIcon={walkmateClicked}
            top={17.5}
            left={20.5}
            width={158}
            isClicked={isClicked.walkmate}
            onClick={() => setIsClicked({ ...isClicked, walkmate: true })}
          />
          <Project
            project={moviexd}
            clickedIcon={moviexdClicked}
            top={17.5}
            left={37}
            width={135}
            isClicked={isClicked.moviexd}
            onClick={() => setIsClicked({ ...isClicked, moviexd: true })}
          />
          <Project
            project={travel}
            clickedIcon={travelClicked}
            top={30}
            left={19.5}
            width={202}
            isClicked={isClicked.travel}
            onClick={() => setIsClicked({ ...isClicked, travel: true })}
          />
          <Project
            project={basket}
            clickedIcon={basketClicked}
            top={30}
            left={35.3}
            width={192}
            isClicked={isClicked.basket}
            onClick={() => setIsClicked({ ...isClicked, basket: true })}
          />
        </article>
      </WorkFile>
    </Draggable>
  );
};

export default Work;
