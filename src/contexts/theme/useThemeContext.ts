import { useContext } from "react";

import ThemeContext from "@/contexts/theme/ThemeContext";

export default function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error("useThemeContext must be used inside ThemeContext");
  return context;
}
