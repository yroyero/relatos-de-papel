import React from "react";
import { Footer } from "../organismos/footer";
import { Header } from "../organismos/header";
import "./style.css";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    
  return (
    <>
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
export {};
