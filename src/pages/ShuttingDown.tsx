import React from "react";

import { Loader, LoaderContainer } from "../assets/style/Preloader.style";

export const ShuttingDown = () => {
  return (
    <section>
      <LoaderContainer>
        <Loader />
        <p>Windows is shutting down.</p>
      </LoaderContainer>
    </section>
  );
};
