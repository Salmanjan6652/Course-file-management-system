import React from "react";
import { Bell, Settings, UserCircle } from "lucide-react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">

      <h2 className="navTitle">
        🎓Course File Management System
      </h2>

      <div className="navIcons">
        <Bell />
        <Settings />
        <UserCircle />
      </div>

    </div>
  );
};

export default Navbar;