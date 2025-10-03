import { createBrowserRouter } from "react-router";

import Root from "@/components/layout/RootLayout";
import Home from "@/pages/Home";
import Trending from "@/pages/movies/Trending";
import Latest from "@/pages/movies/Latest";
import TopRated from "@/pages/movies/TopRated";

export const routes = [
  { path: "", name: "Home", isNavLink: true, Component: Home },
  {
    path: "/latest",
    name: "Latest",
    isNavLink: true,
    Component: Latest,
  },
  {
    path: "/trending",
    name: "Trending",
    isNavLink: true,
    Component: Trending,
  },
  {
    path: "/top-rated",
    name: "Top Rated",
    isNavLink: true,
    Component: TopRated,
  },
];

const router = createBrowserRouter([
  { path: "/", Component: Root, children: routes },
]);

export default router;
