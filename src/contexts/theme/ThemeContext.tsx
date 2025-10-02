import { createContext } from "react";

export type Theme = "light" | "dark";

type ThemeContext = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContext>({
  theme: "light",
  toggleTheme: () => {},
});

export default ThemeContext;
