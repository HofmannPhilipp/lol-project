import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar bg-slate-500">
      <div className="container mx-auto ">
        <div className="flex-1 ">
          <Link to="/" className="text-xl">
            <span className="text-primary font-bold">LOL</span>UI
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
