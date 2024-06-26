import React, { useEffect, useRef } from "react";

import about from "../assets/images/icons/about.png";
import contact from "../assets/images/icons/contact.png";
import recycle from "../assets/images/icons/recycle.png";
import work from "../assets/images/icons/work.png";
import {
  Icon,
  IconsContainer,
  RecycleBin,
  Selection
} from "../assets/style/Icons.style";
import { useGlobalContext } from "../utils/context";
import { useOutsideClick } from "../utils/hooks";

const Icons = () => {
  const {
    isClicked,
    setIsClicked,
    isOpen,
    setIsOpen,
    isVisible,
    setIsVisible
  } = useGlobalContext();
  const iconRef = useRef<HTMLDivElement>(null);

  const handleClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    iconName: string
  ) => {
    switch (event.detail) {
      case 1:
        setIsClicked({
          about: false,
          work: false,
          contact: false,
          recycle: false,
          book: false
        });
        setIsClicked((prevState) => ({
          ...prevState,
          [iconName]: true
        }));

        setIsOpen({ ...isOpen, start: false });
        break;
      case 2:
        setIsOpen({ ...isOpen, [iconName]: true });
        setIsVisible({ ...isVisible, [iconName]: true });
        setIsClicked({ ...isClicked, [iconName]: true });

        break;
      default:
        setIsClicked({ ...isClicked, [iconName]: true });

        break;
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      Object.keys(isClicked).forEach((icon) => {
        if (isClicked[icon] === true) {
          setIsOpen((prev) => ({ ...prev, [icon]: true }));
          setIsVisible((prev) => ({ ...prev, [icon]: true }));
        }
      });
    }
  };

  useOutsideClick(iconRef, () => {
    setIsClicked({
      about: false,
      work: false,
      contact: false,
      recycle: false,
      book: false
    });
  });

  return (
    <>
      <IconsContainer>
        <Icon
          isClicked={isClicked.about}
          onMouseDown={(event) => {
            event.preventDefault();
            handleClick(event, "about");
          }}
          onKeyDown={(event) => handleKeyDown(event)}
          tabIndex={0}
          ref={iconRef}
        >
          <img src={about} alt="aboutIcon" />
          <Selection isClicked={isClicked.about} iconName={about} />
          <p>About Me</p>
        </Icon>
        <Icon
          isClicked={isClicked.work}
          onMouseDown={(event) => {
            event.preventDefault();
            handleClick(event, "work");
          }}
          onKeyDown={(event) => handleKeyDown(event)}
          tabIndex={0}
          ref={iconRef}
        >
          <img src={work} alt="workIcon" />
          <Selection isClicked={isClicked.work} iconName={work} />
          <p>My Work</p>
        </Icon>
        <Icon
          isClicked={isClicked.contact}
          onMouseDown={(event) => {
            event.preventDefault();
            handleClick(event, "contact");
          }}
          onKeyDown={(event) => handleKeyDown(event)}
          tabIndex={0}
          ref={iconRef}
        >
          <img src={contact} alt="contactIcon" />
          <Selection isClicked={isClicked.contact} iconName={contact} />
          <p>Contact</p>
        </Icon>
      </IconsContainer>
      <RecycleBin
        isClicked={isClicked.recycle}
        onMouseDown={(event) => {
          event.preventDefault();
          handleClick(event, "recycle");
        }}
        onKeyDown={(event) => handleKeyDown(event)}
        tabIndex={0}
        ref={iconRef}
      >
        <img src={recycle} alt="recycleIcon" />
        <Selection isClicked={isClicked.recycle} iconName={recycle} />
        <p>Recycle Bin</p>
      </RecycleBin>
    </>
  );
};

export default Icons;
