import { useEffect, useState } from "react";

const useLoadingTimer = (delay = 3000) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [delay]);

  return { isLoading };
};

export default useLoadingTimer;
