import React from "react";

import {
  Loader as Loading,
  LoaderContainer,
} from "../assets/style/Preloader.style";

const Loader = ({ preloader }: { preloader: boolean }) => {
  return (
    <section>
      <LoaderContainer>
        <Loading />
        {!preloader && <p>Windows is shutting down.</p>}
      </LoaderContainer>
    </section>
  );
};

export default Loader;
