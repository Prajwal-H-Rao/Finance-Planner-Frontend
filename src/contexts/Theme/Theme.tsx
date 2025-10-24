import { useState, useEffect } from "react";
import type { IThemeProviderProps } from "../../types/themes.types";
import { ThemeContext } from "../../hooks/Theme/useTheme.tsx";

export const ThemeProvider = ({ children }: IThemeProviderProps) => {
  const [theme, setTheme] = useState<string>("winter");

  const toggleTheme = () => {
    setTheme(theme === "winter" ? "night" : "winter");
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
