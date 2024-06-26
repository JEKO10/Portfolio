import React, { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";

import project from "../../assets/images/icons/project.png";
import { Selection } from "../../assets/style/Icons.style";
import { Project, WorkFile, WorkHandle } from "../../assets/style/Work.style";
import { useGlobalContext } from "../../utils/context";
import FileLoader from "../../utils/FileLoader";
import { useLoadingTimer, useOutsideClick } from "../../utils/hooks";
import ControlBtns from "../ControlBtns";

const Work = () => {
  const { lastClicked, setLastClicked, isVisible } = useGlobalContext();
  const [isClicked, setIsClicked] = useState({
    walkmate: false,
    moviexd: false,
    travel: false,
    basket: false
  });
  const projectRef = useRef<HTMLDivElement>(null);
  const { isLoading } = useLoadingTimer();

  const handleClick = (iconName: string) => {
    setIsClicked({
      walkmate: false,
      moviexd: false,
      travel: false,
      basket: false
    });
    setIsClicked((prevState) => ({
      ...prevState,
      [iconName]: true
    }));
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
    link: string
  ) => {
    if (event.key === "Enter") {
      window.open(link, "_blank");
    }
  };

  useOutsideClick(projectRef, () => {
    setIsClicked({
      walkmate: false,
      moviexd: false,
      travel: false,
      basket: false
    });
  });

  return (
    <>
      <Draggable
        defaultPosition={{ x: 100, y: -430 }}
        handle=".handle"
        bounds="body"
        cancel=".handle *"
      >
        <WorkFile
          onMouseDownCapture={() => setLastClicked("work")}
          isLoading={isLoading}
          isVisible={isVisible.work}
          lastClicked={lastClicked}
          data-no-select="true"
        >
          <WorkHandle className="handle" isVisible={isVisible.work}>
            <ControlBtns iconName="work" />
          </WorkHandle>
          <article>
            <Project
              project={project}
              top={15}
              left={18}
              isClicked={isClicked.walkmate}
              onClick={() => handleClick("walkmate")}
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
            </Project>
            <Project
              project={project}
              top={15}
              left={34}
              isClicked={isClicked.moviexd}
              onClick={() => handleClick("moviexd")}
              onDoubleClick={() =>
                window.open("https://github.com/JEKO10/Moviexd", "_blank")
              }
              onKeyDown={(event) =>
                handleKeyDown(event, "https://github.com/JEKO10/Moviexd")
              }
              tabIndex={0}
              ref={projectRef}
            >
              <img src={project} alt="projectMoviexd" />
              <Selection isClicked={isClicked.moviexd} iconName={project} />
              <p>Moviexd.doc</p>
            </Project>
            <Project
              project={project}
              top={26}
              left={16.5}
              isClicked={isClicked.travel}
              onClick={() => handleClick("travel")}
              onDoubleClick={() =>
                window.open(
                  "https://github.com/JEKO10/Travel-advisor",
                  "_blank"
                )
              }
              onKeyDown={(event) =>
                handleKeyDown(event, "https://github.com/JEKO10/Travel-advisor")
              }
              tabIndex={0}
              ref={projectRef}
            >
              <img src={project} alt="projectTravelAdvisor" />
              <Selection isClicked={isClicked.travel} iconName={project} />
              <p>Travel advisor.doc</p>
            </Project>
            <Project
              project={project}
              top={26}
              left={32}
              isClicked={isClicked.basket}
              onClick={() => handleClick("basket")}
              onDoubleClick={() =>
                window.open("https://github.com/JEKO10/BasketReport", "_blank")
              }
              onKeyDown={(event) =>
                handleKeyDown(event, "https://github.com/JEKO10/BasketReport")
              }
              tabIndex={0}
              ref={projectRef}
            >
              <img src={project} alt="projectBasketReport" />
              <Selection isClicked={isClicked.basket} iconName={project} />
              <p>Basket report.doc</p>
            </Project>
          </article>
        </WorkFile>
      </Draggable>
      {isLoading && <FileLoader top={55} left={25} />}
    </>
  );
};

export default Work;
