import { useCallback } from "react";

export function useTheme() {
  const setDark = useCallback(() => {
    // Whenever the user explicitly chooses dark mode
    localStorage.theme = "dark";
  }, []);

  const setLight = useCallback(() => {
    // Whenever the user explicitly chooses light mode
    localStorage.theme = "light";
  }, []);

  const setSystem = useCallback(() => {
    // Whenever the user explicitly chooses to respect the OS preference
    localStorage.removeItem("theme");
  }, []);

  return {
    setDark,
    setLight,
    setSystem,
  };
}
