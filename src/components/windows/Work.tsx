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
    portfolio: false,
    moviexd: false,
    hiking: false,
    basket: false,
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
              alt="portfolio"
              label="Portfolio.doc"
              link="Portfolio"
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
              left={18.5}
              alt="vehicle"
              label="Market.doc"
              link="vehicle-market"
              isClicked={isClicked}
              setIsClicked={setIsClicked}
            />
            <Project
              top={26}
              left={32}
              alt="basket"
              label="Basket report.doc"
              link="Turniri"
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
