import React from "react";

import About from "./windows/About";
import Contact from "./windows/Contact";
import RecycleBin from "./windows/RecycleBin";
import Time from "./windows/Time";
import Work from "./windows/Work";

type ClickedState = {
  about: boolean;
  work: boolean;
  contact: boolean;
  recycle: boolean;
  time?: boolean;
};

type FilesProps = {
  isOpen: ClickedState;
};

const Files: React.FC<FilesProps> = ({ isOpen }) => {
  return (
    <section>
      {isOpen.about && <About />}
      {isOpen.contact && <Contact />}
      {isOpen.work && <Work />}
      {isOpen.recycle && <RecycleBin />}
      {isOpen.time && <Time />}
    </section>
  );
};

export default Files;
