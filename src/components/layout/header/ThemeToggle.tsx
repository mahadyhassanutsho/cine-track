import { Sun, Moon } from "lucide-react";

import useThemeContext from "@/contexts/theme/useThemeContext";
import Button from "@/components/ui/button/Button";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <Button onClick={toggleTheme} variant={"outline"}>
      {theme === "light" ? <Moon /> : <Sun />}
    </Button>
  );
}
