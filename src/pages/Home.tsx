import React, { useState } from "react";

import Files from "../components/Files";
import Icons from "../components/Icons";
import Taskbar from "../components/Taskbar";

type ClickedState = {
  about: boolean;
  work: boolean;
  contact: boolean;
  recycle: boolean;
};

const Home = () => {
  const [isClicked, setIsClicked] = useState<ClickedState>({
    about: false,
    work: false,
    contact: false,
    recycle: false,
  });
  const [isOpen, setIsOpen] = useState<ClickedState>({
    about: false,
    work: false,
    contact: false,
    recycle: false,
  });

  return (
    <section>
      <Icons
        isClicked={isClicked}
        setIsClicked={setIsClicked}
        setIsOpen={setIsOpen}
      />
      <Files isOpen={isOpen} />
      <Taskbar />
    </section>
  );
};

export default Home;
