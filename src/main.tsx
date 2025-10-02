import "inter-ui/inter.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import ThemeContextProvider from "./contexts/theme/ThemeContextProvider.tsx";
import App from "./components/App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </StrictMode>
);
