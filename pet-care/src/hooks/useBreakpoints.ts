import { useEffect, useState } from "react";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

const config = resolveConfig(tailwindConfig);

export const useBreakpoints = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkBreakpoint = () => {
      const width = window.innerWidth;

      const sm = parseInt(config.theme.screens.sm);
      const md = parseInt(config.theme.screens.md);
      const lg = parseInt(config.theme.screens.lg);
      const xl = parseInt(config.theme.screens.xl);

      setIsMobile(width < sm);
      setIsTablet(width >= sm && width < md);
      setIsLargeScreen(width >= lg);
      setIsDesktop(width >= xl);
    };

    checkBreakpoint();
    window.addEventListener("resize", checkBreakpoint);

    return () => {
      window.removeEventListener("resize", checkBreakpoint);
    };
  }, []);

  return {
    isMobile,
    isTablet,
    isLargeScreen,
    isDesktop,
    breakpoints: config.theme.screens,
  };
};
