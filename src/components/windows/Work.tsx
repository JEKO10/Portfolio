import React, { useState } from "react";
import Draggable from "react-draggable";

import handleImg from "../../assets/images/icons/work.png";
import { WorkFile, WorkHandle } from "../../assets/style/Work.style";
import { useGlobalContext } from "../../utils/context";
import { useLoadingTimer } from "../../utils/hooks";
import ControlBtns from "../ControlBtns";
import Project from "../Project";

const Work = () => {
  const { lastClicked, setLastClicked, isVisible } = useGlobalContext();
  const [isClicked, setIsClicked] = useState({
    walkmate: false,
    moviexd: false,
    travel: false,
    basket: false
  });
  const { isLoading } = useLoadingTimer();

  return (
    <>
      <Draggable handle=".handle" bounds="body" cancel=".handle *">
        <WorkFile
          onMouseDownCapture={() => setLastClicked("work")}
          isLoading={isLoading}
          isVisible={isVisible.work}
          lastClicked={lastClicked}
          data-no-select="true"
        >
          <ControlBtns iconName="work" />
          <WorkHandle className="handle" isVisible={isVisible.work}>
            <div>
              <img src={handleImg} alt="handleImg" />
              <p>My Work</p>
            </div>
          </WorkHandle>
          <article>
            <Project
              top={15}
              left={18}
              alt="walkmate"
              label="WalkMate.doc"
              link="WalkMate"
              isClicked={isClicked}
              setIsClicked={setIsClicked}
            />
            <Project
              top={15}
              left={34}
              alt="moviexd"
              label="Moviexd.doc"
              link="Moviexd"
              isClicked={isClicked}
              setIsClicked={setIsClicked}
            />
            <Project
              top={26}
              left={16.5}
              alt="travel"
              label="Travel advisor.doc"
              link="Travel-advisor"
              isClicked={isClicked}
              setIsClicked={setIsClicked}
            />
            <Project
              top={26}
              left={32}
              alt="basket"
              label="Basket report.doc"
              link="BasketReport"
              isClicked={isClicked}
              setIsClicked={setIsClicked}
            />
          </article>
        </WorkFile>
      </Draggable>
    </>
  );
};

export default Work;

{
  /* <Project
  project={project}
  top={15}
  left={18}
  isClicked={isClicked.walkmate}
  onMouseDown={(e) => {
    e.preventDefault();
    handleClick("walkmate");
  }}
  onDoubleClick={() =>
    window.open("https://github.com/JEKO10/WalkMate", "_blank")
  }
  onKeyDown={(event) =>
    handleKeyDown(event, "https://github.com/JEKO10/WalkMate")
  }
  tabIndex={0}
  ref={projectRef}
>
  <img src={project} alt="projectWalkmate" />
  <Selection isClicked={isClicked.walkmate} iconName={project} />
  <p>WalkMate.doc</p>
</Project>; */
}
