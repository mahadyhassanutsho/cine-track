import { GeistProvider, CssBaseline } from "@geist-ui/core";
import { RouterProvider } from "react-router";

import router from "../lib/router.ts";
import useThemeContext from "../hooks/useThemeContext.ts";

export default function App() {
  const { theme } = useThemeContext();

  return (
    <GeistProvider themeType={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </GeistProvider>
  );
}
