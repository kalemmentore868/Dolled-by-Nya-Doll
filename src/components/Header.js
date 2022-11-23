import React from "react";
import "../assets/css/headerStyles.css";

import TopNav from "./TopNav";
import MiddleNav from "./MiddleNav";
import BottomNav from "./BottomNav";

const Header = () => {
  return (
    <header className="section-header">
      <TopNav />
      <MiddleNav />
      <BottomNav />
    </header>
  );
};

export default Header;
