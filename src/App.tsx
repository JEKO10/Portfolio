import React, { useEffect } from "react";

import GlobalFonts from "./assets/fonts/fonts";
import { GlobalStyles } from "./assets/style/GlobalStyles";
import { Preloader } from "./components/Preloader";
import { useGlobalContext } from "./context";
import Home from "./pages/Home";
import ShutDown from "./pages/ShutDown";

function App() {
  const { isShutDown, isLoading, setIsLoading } = useGlobalContext();

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
      {isLoading ? (
        <Preloader />
      ) : <Home /> ? (
        isShutDown ? (
          <ShutDown />
        ) : (
          <Home />
        )
      ) : (
        <Home />
      )}
    </main>
  );
}

export default App;
