import { useState, useEffect } from "react";

function useWindowWidth(screenSize) {
  const [onSmallScreen, setOnSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setOnSmallScreen(window.innerWidth < screenSize);
    };
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, [screenSize]);

  return onSmallScreen;
}

export default useWindowWidth;
