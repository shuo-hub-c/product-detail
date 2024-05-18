import React from "react";
import "./Header.css";
import { ReactComponent as Logo } from "../../icons/stackline_logo.svg";

function Header({ logo }) {
  return (
    <div className="header">
      <Logo className="logo" />
    </div>
  );
}

export default Header;
