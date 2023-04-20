import React, { useState } from "react";

import about from "../assets/images/about.png";
import contact from "../assets/images/contact.png";
import work from "../assets/images/work.png";
import { Icon, IconsContainer, RecycleBin } from "../assets/style/Icons.style";

type ClickedState = {
  about: boolean;
  work: boolean;
  contact: boolean;
};

const Icons = () => {
  const [isClicked, setIsClicked] = useState<ClickedState>({
    about: false,
    work: false,
    contact: false,
  });

  const handleClick = (iconName: string) => {
    setIsClicked({
      about: false,
      work: false,
      contact: false,
    });
    setIsClicked((prevState) => ({
      ...prevState,
      [iconName]: true,
    }));
  };

  return (
    <>
      <IconsContainer>
        <Icon
          iconName={about}
          isClicked={isClicked.about}
          onDoubleClick={() => handleClick("about")}
        />
        <Icon
          iconName={work}
          isClicked={isClicked.work}
          onDoubleClick={() => handleClick("work")}
        />
        <Icon
          iconName={contact}
          isClicked={isClicked.contact}
          onDoubleClick={() => handleClick("contact")}
        />
      </IconsContainer>
      <RecycleBin />
    </>
  );
};

export default Icons;
