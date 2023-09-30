import React from "react";

import AnalogClock from "../components/AnalogClock";
import Files from "../components/Files";
import Icons from "../components/Icons";
import Taskbar from "../components/Taskbar";

const Home = () => {
  return (
    <section>
      <AnalogClock />
      <Icons />
      <Files />
      <Taskbar />
    </section>
  );
};

export default Home;
