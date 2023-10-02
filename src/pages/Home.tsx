import React from "react";

import Files from "../components/Files";
import Icons from "../components/Icons";
import Taskbar from "../components/Taskbar";

const Home = () => {
  return (
    <section>
      <Icons />
      <Files />
      <Taskbar />
    </section>
  );
};

export default Home;
