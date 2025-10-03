import { createBrowserRouter } from "react-router";

import Root from "@/components/layout/RootLayout";
import Home from "@/pages/Home";

export const routes = [
  { path: "", name: "Home", isNavLink: true, Component: Home },
];

const router = createBrowserRouter([
  { path: "/", Component: Root, children: routes },
]);

export default router;
