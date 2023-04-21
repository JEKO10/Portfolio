import React, { useEffect, useRef } from "react";

import about from "../assets/images/about.png";
import contact from "../assets/images/contact.png";
import recycle from "../assets/images/recycle.png";
import work from "../assets/images/work.png";
import { Icon, IconsContainer, RecycleBin } from "../assets/style/Icons.style";

type ClickedState = {
  about: boolean;
  work: boolean;
  contact: boolean;
  recycle: boolean;
};

type IconsProp = {
  isClicked: ClickedState;
  setIsClicked: React.Dispatch<React.SetStateAction<ClickedState>>;
};

const Icons: React.FC<IconsProp> = ({ isClicked, setIsClicked }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = (iconName: string) => {
    setIsClicked({
      about: false,
      work: false,
      contact: false,
      recycle: false,
    });
    setIsClicked((prevState) => ({
      ...prevState,
      [iconName]: true,
    }));
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
          onClick={() => handleClick("about")}
          ref={buttonRef}
        />
        <Icon
          iconName={work}
          isClicked={isClicked.work}
          onClick={() => handleClick("work")}
          ref={buttonRef}
        />
        <Icon
          iconName={contact}
          isClicked={isClicked.contact}
          onClick={() => handleClick("contact")}
          ref={buttonRef}
        />
      </IconsContainer>
      <RecycleBin
        iconName={recycle}
        isClicked={isClicked.recycle}
        onClick={() => handleClick("recycle")}
        ref={buttonRef}
      />
    </>
  );
};

export default Icons;
