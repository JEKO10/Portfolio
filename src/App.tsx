import React, { useEffect, useState } from "react";

import GlobalFonts from "./assets/fonts/fonts";
import { GlobalStyles } from "./assets/style/GlobalStyles";
import { Preloader } from "./components/Preloader";
import StartMenu from "./components/windows/StartMenu";
import Home from "./pages/Home";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <main>
      <GlobalStyles />
      <GlobalFonts />
      {isLoading ? <Preloader /> : <Home />}
      <StartMenu />
    </main>
  );
}

export default App;
