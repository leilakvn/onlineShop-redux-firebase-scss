import React from "react";
import Routers from "../routers/Routers";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <div>
        <Routers />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
