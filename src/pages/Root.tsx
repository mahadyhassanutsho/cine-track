import { Outlet } from "react-router";
import { Page } from "@geist-ui/core";

import Navbar from "../components/common/Header/Navbar";
import Footer from "../components/common/Footer";

export default function Root() {
  return (
    <Page>
      <Navbar />

      <Outlet />

      <Footer />
    </Page>
  );
}
