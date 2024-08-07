import React, { useRef } from "react";

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
  const iconsData = [
    { name: "about", src: about, alt: "aboutIcon", label: "About Me" },
    { name: "work", src: work, alt: "workIcon", label: "My Work" },
    { name: "contact", src: contact, alt: "contactIcon", label: "Contact" }
  ];

  const handleClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    iconName: string
  ) => {
    iconRef.current?.focus();

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
        {iconsData.map((icon) => (
          <Icon
            key={icon.name}
            isClicked={isClicked[icon.name] || false}
            onMouseDown={(event) => {
              handleClick(event, icon.name);
            }}
            onKeyDown={(e) => handleKeyDown(e)}
            tabIndex={0}
            ref={iconRef}
          >
            <img src={icon.src} alt={icon.alt} />
            <Selection
              isClicked={isClicked[icon.name] || false}
              iconName={icon.src}
            />
            <p>{icon.label}</p>
          </Icon>
        ))}
      </IconsContainer>
      <RecycleBin
        isClicked={isClicked.recycle}
        onMouseDown={(event) => {
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
