import { Page, Text } from "@geist-ui/core";

export default function Footer() {
  return (
    <Page.Footer>
      <footer
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text small>All Rights Reserved @UtshoMH 2025</Text>
      </footer>
    </Page.Footer>
  );
}
