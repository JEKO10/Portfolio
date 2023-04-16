import React from "react";

import about from "../assets/images/about.png";
import contact from "../assets/images/contact.png";
import recycle from "../assets/images/recycle.png";
import work from "../assets/images/work.png";
import { Icon, IconsContainer } from "../assets/style/Icons.style";

const Icons = () => {
  return (
    <>
      <IconsContainer>
        <Icon iconName={about} />
        <Icon iconName={work} />
        <Icon iconName={contact} />
      </IconsContainer>
      <Icon iconName={recycle} />
    </>
  );
};

export default Icons;
