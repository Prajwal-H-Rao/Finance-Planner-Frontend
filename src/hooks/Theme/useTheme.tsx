import { createContext, useContext } from "react";
import type { IThemeContextType } from "../../types/themes.types";

export const ThemeContext = createContext<IThemeContextType | undefined>(
  undefined
);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
