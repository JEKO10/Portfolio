import React, { useState } from "react";

// import aboutClicked from "../assets/images/icons/aboutClicked.png";
// import contactClicked from "../assets/images/icons/contactClicked.png";
// import workClicked from "../assets/images/icons/workClicked.png";
import Files from "../components/Files";
import Icons from "../components/Icons";
import Taskbar from "../components/Taskbar";
import { useGlobalContext } from "../context";

type IconsType = {
  [key: string]: {
    y: number;
    x: number;
    height: number;
    width: number;
  };
};

const Home = () => {
  const [mouseDown, setMouseDown] = useState(false);
  const [isRectangleVisible, setRectangleVisible] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const [endPosition, setEndPosition] = useState({ x: 0, y: 0 });

  const { isClicked, setIsClicked } = useGlobalContext();

  const icons: IconsType = {
    about: {
      x: 30,
      y: 35,
      height: 140,
      width: 116,
    },
    work: {
      x: 30,
      y: 215,
      height: 140,
      width: 116,
    },
    contact: {
      x: 30,
      y: 395,
      height: 140,
      width: 116,
    },
    recycle: {
      x: 1390,
      y: 615,
      height: 140,
      width: 116,
    },
  };

  const handleMouseUp = () => {
    setMouseDown(false);
    setRectangleVisible(false);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    const clickX = e.clientX;
    const clickY = e.clientY;

    const file = document.querySelector(".file");
    const taskbar = document.querySelector(".taskbar");
    const isInsideHandle = file && file.contains(e.target as Node);
    const isInsideTaskbar = taskbar && taskbar.contains(e.target as Node);

    if (isInsideHandle || isInsideTaskbar) {
      return;
    }

    for (const iconKey in icons) {
      const icon = icons[iconKey];

      const isInsideIcon =
        clickX >= icon.x &&
        clickX <= icon.x + icon.width &&
        clickY >= icon.y &&
        clickY <= icon.y + icon.height;

      if (isInsideIcon) {
        return;
      }
    }

    setMouseDown(true);
    setRectangleVisible(true);
    setStartPosition({ x: clickX, y: clickY });
    setEndPosition({ x: clickX, y: clickY });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (mouseDown) {
      setEndPosition({ x: e.clientX, y: e.clientY });

      const rectangle = {
        x: Math.min(startPosition.x, endPosition.x),
        y: Math.min(startPosition.y, endPosition.y),
        width: Math.abs(endPosition.x - startPosition.x),
        height: Math.abs(endPosition.y - startPosition.y),
      };

      const selectedIcons: { [key: string]: boolean } = {};

      for (const iconKey in icons) {
        const icon = icons[iconKey];

        const isIntersecting =
          icon.x < rectangle.x + rectangle.width &&
          icon.x + icon.width > rectangle.x &&
          icon.y < rectangle.y + rectangle.height &&
          icon.y + icon.height > rectangle.y;

        if (isIntersecting) {
          selectedIcons[iconKey] = true;
        } else {
          selectedIcons[iconKey] = false;
        }
      }

      setIsClicked({ ...isClicked, ...selectedIcons });
    }
  };

  return (
    <section
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      style={{ height: "100vh" }}
    >
      {isRectangleVisible && (
        <div
          style={{
            position: "absolute",
            border: "2px solid gray",
            pointerEvents: "none",
            top: `${Math.min(startPosition.y, endPosition.y)}px`,
            left: `${Math.min(startPosition.x, endPosition.x)}px`,
            width: `${Math.abs(endPosition.x - startPosition.x)}px`,
            height: `${Math.abs(endPosition.y - startPosition.y)}px`,
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
