import "inter-ui/inter.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GeistProvider, CssBaseline } from "@geist-ui/core";
import { RouterProvider } from "react-router";

import router from "./lib/router.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GeistProvider>
      <CssBaseline />
      <RouterProvider router={router} />
    </GeistProvider>
  </StrictMode>
);
