import React, { useEffect, useState } from "react";

import { GlobalStyles } from "./assets/style/GlobalStyles";
import { Loader, Preloader } from "./assets/style/Preloader.style";

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
      {isLoading ? (
        <Preloader>
          <Loader></Loader>
        </Preloader>
      ) : (
        <h1>Welcome to my potfolio</h1>
      )}
    </main>
  );
}

export default App;
