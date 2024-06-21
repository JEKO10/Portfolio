import React, { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";

import basket from "../../assets/images/icons/Basket.png";
import basketClicked from "../../assets/images/icons/basketClicked.png";
import moviexd from "../../assets/images/icons/Moviexd.png";
import moviexdClicked from "../../assets/images/icons/moviexdClicked.png";
import travel from "../../assets/images/icons/Travel.png";
import travelClicked from "../../assets/images/icons/travelClicked.png";
import walkmateClicked from "../../assets/images/icons/walkClicked.png";
import walkmate from "../../assets/images/icons/Walkmate.png";
import { Project, WorkFile, WorkHandle } from "../../assets/style/Work.style";
import { useGlobalContext } from "../../utils/context";
import ControlBtns from "../ControlBtns";

const Work = () => {
  const { lastClicked, setLastClicked, isVisible } = useGlobalContext();

  const projectRef = useRef<HTMLButtonElement>(null);

  const [isClicked, setIsClicked] = useState({
    walkmate: false,
    moviexd: false,
    travel: false,
    basket: false
  });

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
    event: React.KeyboardEvent<HTMLButtonElement>,
    link: string
  ) => {
    if (event.key === "Enter") {
      window.open(link, "_blank");
    }
  };

  const clickOutside = (e: MouseEvent) => {
    if (!projectRef.current?.contains(e.target as Node)) {
      setIsClicked({
        walkmate: false,
        moviexd: false,
        travel: false,
        basket: false
      });
    }
  };

  useEffect(() => {
    document.addEventListener("click", clickOutside, true);
  }, []);

  return (
    <Draggable
      defaultPosition={{ x: 100, y: -430 }}
      handle=".handle"
      bounds="body"
      cancel=".handle *"
    >
      <WorkFile
        onMouseDownCapture={() => setLastClicked("work")}
        isVisible={isVisible.work}
        lastClicked={lastClicked}
        data-no-select="true"
      >
        <WorkHandle className="handle" isVisible={isVisible.work}>
          <ControlBtns iconName="work" />
        </WorkHandle>
        <article>
          <Project
            project={walkmate}
            clickedIcon={walkmateClicked}
            top={15}
            left={18}
            width={158}
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
          />
          <Project
            project={moviexd}
            clickedIcon={moviexdClicked}
            top={15}
            left={34}
            width={135}
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
          />
          <Project
            project={travel}
            clickedIcon={travelClicked}
            top={26}
            left={16.5}
            width={202}
            isClicked={isClicked.travel}
            onClick={() => handleClick("travel")}
            onDoubleClick={() =>
              window.open("https://github.com/JEKO10/Travel-advisor", "_blank")
            }
            onKeyDown={(event) =>
              handleKeyDown(event, "https://github.com/JEKO10/Travel-advisor")
            }
            tabIndex={0}
            ref={projectRef}
          />
          <Project
            project={basket}
            clickedIcon={basketClicked}
            top={26}
            left={32}
            width={192}
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
          />
        </article>
      </WorkFile>
    </Draggable>
  );
};

export default Work;
