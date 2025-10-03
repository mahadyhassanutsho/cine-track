import { Link } from "react-router";

import { routes } from "@/lib/router";
import NavLink from "@/components/ui/link/NavLink";
import Container from "@/components/layout/Container";

import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <Container>
      <div className="flex items-center justify-between py-4">
        <Link to="/">
          <h1 className="text-2xl font-semibold">CineTrack</h1>
        </Link>

        <nav className="flex items-center gap-2.5">
          {routes
            .filter((route) => route.isNavLink)
            .map((route, i) => (
              <NavLink key={i} href={route.path}>
                {route.name}
              </NavLink>
            ))}

          <ThemeToggle />
        </nav>
      </div>
    </Container>
  );
}
