import React from "react";

import Book from "../components/windows/Book";
import { useGlobalContext } from "../utils/context";
import About from "./windows/About";
import Contact from "./windows/Contact";
import RecycleBin from "./windows/RecycleBin";
import StartMenu from "./windows/StartMenu";
import Time from "./windows/Time";
import Work from "./windows/Work";

const Files = () => {
  const { isOpen } = useGlobalContext();

  return (
    <section>
      {isOpen.about && <About />}
      {isOpen.contact && <Contact />}
      {isOpen.work && <Work />}
      {/* {isOpen.recycle && <RecycleBin />} */}
      {isOpen.book && <Book />}
      {isOpen.time && <Time />}
      {/* {isOpen.start && <StartMenu />} */}
      <StartMenu />
    </section>
  );
};

export default Files;
