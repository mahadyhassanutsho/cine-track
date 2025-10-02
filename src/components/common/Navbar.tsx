import { NavLink } from "react-router";

import { Page, Text } from "@geist-ui/core";

export default function Navbar() {
  return (
    <Page.Header>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo / Brand */}
        <NavLink to={"/"}>
          <Text h3 style={{ color: "black" }}>
            CineTrack
          </Text>
        </NavLink>

        <nav
          style={{
            display: "flex",
            gap: "1.5rem",
            alignItems: "center",
          }}
        ></nav>
      </div>
    </Page.Header>
  );
}
