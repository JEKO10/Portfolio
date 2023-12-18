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
import {
  CloseBtn,
  MaximizeBtn,
  MinimizeBtn,
} from "../../assets/style/Files.style";
import { Project, WorkFile, WorkHandle } from "../../assets/style/Work.style";
import { useGlobalContext } from "../../utils/context";
import useWindowControls from "../../utils/useWindowControls";

const Work = () => {
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
  const projectRef = useRef<HTMLButtonElement>(null);

  const [isClicked, setIsClicked] = useState({
    walkmate: false,
    moviexd: false,
    travel: false,
    basket: false,
  });

  const handleClick = (iconName: string) => {
    setIsClicked({
      walkmate: false,
      moviexd: false,
      travel: false,
      basket: false,
    });
    setIsClicked((prevState) => ({
      ...prevState,
      [iconName]: true,
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
        basket: false,
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
    >
      <WorkFile
        onMouseDownCapture={() => setLastClicked("work")}
        isVisible={isVisible.work}
        lastClicked={lastClicked}
        data-no-select="true"
      >
        <WorkHandle className="handle" isVisible={isVisible.work} />
        <MinimizeBtn
          onMouseDown={() => onMouseDownControl("min")}
          onClick={() => {
            onClickControl("min");
            setIsVisible({ ...isVisible, work: false });
          }}
          height={27}
          width={29}
          top={0.7}
          right={4.7}
          isClicked={minimizeBtnClicked}
        />
        <MaximizeBtn
          onMouseDown={() => onMouseDownControl("max")}
          onClick={() => onClickControl("max")}
          height={28}
          width={32}
          top={0.68}
          right={2.78}
          isClicked={maximizeBtnClicked}
        />
        <CloseBtn
          onMouseDown={() => onMouseDownControl("close")}
          onClick={() => {
            onClickControl("close");
            setIsOpen({ ...isOpen, work: false });
          }}
          height={30}
          width={30}
          top={0.6}
          right={0.68}
          isClicked={closeBtnClicked}
        />
        <article>
          <Project
            project={walkmate}
            clickedIcon={walkmateClicked}
            top={17.5}
            left={20.5}
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
            top={17.5}
            left={37}
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
            top={30}
            left={19.5}
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
            top={30}
            left={35.3}
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
