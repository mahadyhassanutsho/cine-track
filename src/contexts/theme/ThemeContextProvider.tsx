import { useEffect } from "react";

import { useToggler } from "@/hooks/useToggler";

import ThemeContext, { type Theme } from "./ThemeContext";

export default function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, toggleTheme] = useToggler<Theme>("light", "dark");

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    root.classList.toggle(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
