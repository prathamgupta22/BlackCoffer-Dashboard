import React from "react";
import { BsSearch } from "react-icons/bs";

function Header({ OpenSidebar }) {
  return (
    <header className="header">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>
      <div className="header-left">
        <BsSearch className="icon" />
      </div>
    </header>
  );
}

export default Header;
