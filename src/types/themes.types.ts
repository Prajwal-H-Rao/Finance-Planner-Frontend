import type { ReactNode } from "react";

export interface IThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

export interface IThemeProviderProps {
  children: ReactNode;
}
