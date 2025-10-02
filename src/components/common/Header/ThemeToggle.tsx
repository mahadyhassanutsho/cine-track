import { Button } from "@geist-ui/core";
import { Sun, Moon } from "@geist-ui/icons";

import useThemeContext from "../../../hooks/useThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <Button
      icon={theme === "light" ? <Moon /> : <Sun />}
      onClick={toggleTheme}
      auto
      scale={2 / 3}
    />
  );
}
