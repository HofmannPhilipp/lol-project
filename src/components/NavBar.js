import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="flex-1">
        <Link to="/">
          <span>Lol</span>UI
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
