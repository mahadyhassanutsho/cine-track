import { NavLink } from "react-router";

import { Page, Spacer, Text } from "@geist-ui/core";
import { routes } from "../../../lib/router";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <Page.Header>
      <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <Text h3 style={{ margin: 0, cursor: "pointer" }}>
            CineTrack
          </Text>
        </NavLink>

        <Spacer style={{ flex: 1 }} />

        <nav style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
          {routes
            .filter((route) => route.isNavLink)
            .map((route, i) => (
              <NavLink
                key={i}
                to={route.path}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  fontWeight: 500,
                  padding: "0.5rem 0.75rem",
                  borderRadius: "4px",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "rgba(0,0,0,0.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "transparent")
                }
              >
                {route.name}
              </NavLink>
            ))}

          <ThemeToggle />
        </nav>
      </div>
    </Page.Header>
  );
}
