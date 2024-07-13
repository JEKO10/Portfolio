import React, { useRef } from "react";

import project from "../assets/images/icons/project.png";
import smallProject from "../assets/images/icons/smallProject.png";
import { Selection } from "../assets/style/Icons.style";
import { Project as Container } from "../assets/style/Work.style";
import { useOutsideClick, useResize } from "../utils/hooks";

type IsClickedKeys = "walkmate" | "moviexd" | "travel" | "basket";

type ProjectProps = {
  top: number;
  left: number;
  alt: IsClickedKeys;
  label: string;
  link: string;
  isClicked: {
    walkmate: boolean;
    moviexd: boolean;
    travel: boolean;
    basket: boolean;
  };
  setIsClicked: React.Dispatch<
    React.SetStateAction<{
      walkmate: boolean;
      moviexd: boolean;
      travel: boolean;
      basket: boolean;
    }>
  >;
};

const Project: React.FC<ProjectProps> = ({
  top,
  left,
  alt,
  label,
  link,
  isClicked,
  setIsClicked
}) => {
  const innerWidth = useResize();
  const projectRef = useRef<HTMLDivElement>(null);

  const handleClick = (iconName: IsClickedKeys) => {
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
    <Container
      top={top}
      left={left}
      alt={alt}
      isClicked={isClicked[alt]}
      onMouseDown={(e) => {
        e.preventDefault();
        handleClick(`${alt}`);
      }}
      onDoubleClick={() =>
        window.open(`https://github.com/JEKO10/${link}`, "_blank")
      }
      onKeyDown={(event) =>
        handleKeyDown(event, `https://github.com/JEKO10/${link}`)
      }
      tabIndex={0}
      ref={projectRef}
    >
      <img src={project} alt={alt} />
      <Selection
        isClicked={isClicked[alt]}
        iconName={innerWidth > 1440 ? project : smallProject}
      />
      <p>{label}</p>
    </Container>
  );
};

export default Project;
