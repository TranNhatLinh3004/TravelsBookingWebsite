import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Routers from "../../router/Routers";

function Layout(props) {
  return (
    <>
      <Header />
      <div>
        <Routers />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
