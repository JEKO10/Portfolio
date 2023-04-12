import React from "react";

import { GlobalStyles, HomePage } from "./assets/style/GlobalStyles";

function App() {
  return (
    <HomePage>
      <GlobalStyles />
      <h1>I am currently rebuilding my portfolio site.</h1>
      <h2>Here is my temporary portfolio: </h2>
      <a
        href="https://aleksa-bubanja.netlify.app"
        target="_blank"
        rel="noreferrer"
      >
        Aleksa Bubanja Portfolio
      </a>
      <h2>Thank you for understanding.</h2>
    </HomePage>
  );
}

export default App;
