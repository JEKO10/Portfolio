import React, { useEffect, useRef } from "react";

import about from "../assets/images/about.png";
import contact from "../assets/images/contact.png";
import recycle from "../assets/images/recycle.png";
import work from "../assets/images/work.png";
import { Icon, IconsContainer, RecycleBin } from "../assets/style/Icons.style";
import { useGlobalContext } from "../context";

const Icons = () => {
  const { isClicked, setIsClicked, setIsOpen } = useGlobalContext();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    iconName: string
  ) => {
    switch (event.detail) {
      case 1:
        setIsClicked((prevState) => ({
          ...prevState,
          [iconName]: true,
        }));
        break;
      case 2:
        setIsOpen((prevState) => ({
          ...prevState,
          [iconName]: true,
        }));

        setIsClicked((prevState) => ({
          ...prevState,
          [iconName]: true,
        }));
        break;
      default:
        setIsClicked((prevState) => ({
          ...prevState,
          [iconName]: true,
        }));
        break;
    }
  };

  const clickOutside = (e: MouseEvent) => {
    if (!buttonRef.current?.contains(e.target as Node)) {
      setIsClicked({
        about: false,
        work: false,
        contact: false,
        recycle: false,
      });
    }
  };

  useEffect(() => {
    document.addEventListener("click", clickOutside, true);
  }, []);

  return (
    <>
      <IconsContainer>
        <Icon
          iconName={about}
          isClicked={isClicked.about}
          onClick={(event) => handleClick(event, "about")}
          ref={buttonRef}
        />
        <Icon
          iconName={work}
          isClicked={isClicked.work}
          onClick={(event) => handleClick(event, "work")}
          ref={buttonRef}
        />
        <Icon
          iconName={contact}
          isClicked={isClicked.contact}
          onClick={(event) => handleClick(event, "contact")}
          ref={buttonRef}
        />
      </IconsContainer>
      <RecycleBin
        iconName={recycle}
        isClicked={isClicked.recycle}
        onClick={(event) => handleClick(event, "recycle")}
        ref={buttonRef}
      />
    </>
  );
};

export default Icons;
