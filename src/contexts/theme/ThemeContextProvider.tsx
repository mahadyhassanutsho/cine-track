import type { ReactNode } from "react";

import { useToggler } from "../../hooks/useToggler";
import ThemeContext, { type Theme } from "./ThemeContext";

export default function ThemeContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [theme, toggleTheme] = useToggler<Theme>("light", "dark");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
