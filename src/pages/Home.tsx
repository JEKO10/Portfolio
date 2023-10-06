import React, { useState } from "react";

// import aboutClicked from "../assets/images/icons/aboutClicked.png";
// import contactClicked from "../assets/images/icons/contactClicked.png";
// import workClicked from "../assets/images/icons/workClicked.png";
import Files from "../components/Files";
import Icons from "../components/Icons";
import Taskbar from "../components/Taskbar";
import { useGlobalContext } from "../context";

const Home = () => {
  const [mouseDown, setMouseDown] = useState(false);
  const [isRectangleVisible, setRectangleVisible] = useState(false);
  const [rectanglePosition, setRectanglePosition] = useState({ x: 0, y: 0 });
  const [rectangleSize, setRectangleSize] = useState({ width: 0, height: 0 });

  const { isClicked, setIsClicked } = useGlobalContext();

  const handleMouseDown = (e: React.MouseEvent<HTMLElement>) => {
    setMouseDown(true);
    setRectangleVisible(true);
    setRectanglePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLElement>) => {
    setMouseDown(false);
    const width = e.clientX - rectanglePosition.x;
    const height = e.clientY - rectanglePosition.y;
    setRectangleSize({ width, height });
    setRectangleVisible(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (mouseDown) {
      const target = e.target;

      const width = e.clientX - rectanglePosition.x;
      const height = e.clientY - rectanglePosition.y;

      setRectangleSize({ width, height });

      if (
        target instanceof HTMLElement &&
        target.tagName.toLowerCase() === "button"
      ) {
        if (target.classList.contains("llyCgC")) {
          setIsClicked({ ...isClicked, about: true });
          // target.style.background = `url(${aboutClicked}) center/contain no-repeat`;
        } else if (target.classList.contains("faIjsa")) {
          setIsClicked({ ...isClicked, work: true });
          // target.style.background = `url(${workClicked}) center/contain no-repeat`;
        } else if (target.classList.contains("jwftwX")) {
          setIsClicked({ ...isClicked, contact: true });
          // target.style.background = `url(${contactClicked}) center/contain no-repeat`;
        }
      }
    }
  };

  return (
    <section
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {isRectangleVisible && (
        <div
          style={{
            position: "absolute",
            border: "2px solid gray",
            pointerEvents: "none",
            top: `${rectanglePosition.y}px`,
            left: `${rectanglePosition.x}px`,
            width: `${Math.abs(rectangleSize.width)}px`,
            height: `${Math.abs(rectangleSize.height)}px`,
          }}
        ></div>
      )}
      <Icons />
      <Files />
      <Taskbar />
    </section>
  );
};

export default Home;

//  if (target.classList.contains("llyCgC")) {
//    target.style.background =
//      "url(/src/assets/images/icons/aboutClicked.png) center/contain no-repeat";
//  }
//  if (target.classList.contains("faIjsa")) {
//    target.style.background =
//      "url(/src/assets/images/icons/workClicked.png) center/contain no-repeat";
//  }
//  if (target.classList.contains("jwftwX")) {
//    target.style.background =
//      "url(/src/assets/images/icons/contactClicked.png) center/contain no-repeat";
//  }
