import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { FaMoon, FaLightbulb } from "react-icons/fa";
type Props = {
  children?: React.ReactNode;
};
const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="swicher-theme">
        <div className="btn btn-swicher-theme dark-color">
          <FaMoon />
        </div>
        <div className="btn btn-swicher-theme white-color">
          <FaLightbulb />
        </div>
      </div>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
