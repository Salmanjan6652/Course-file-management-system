import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css";
import {
  LayoutDashboard,
  BookOpen,
  UserPlus,
  UserCircle,
  LogOut,
} from "lucide-react";

const Sidebar = () => {
  return (
    <div className="sidebarContainer">


      {/* NAV LINKS */}
      <div className="sidebarNav">

        <NavItem
          to="/dashboard"
          icon={<LayoutDashboard size={20} />}
          label="Dashboard"
        />

        <NavItem
          to="/dashboard/courses"
          icon={<BookOpen size={20} />}
          label="My Courses"
        />

        <NavItem
          to="/dashboard/add-course"
          icon={<UserPlus size={20} />}
          label="Add Course"
        />

        <NavItem
          to="/dashboard/profile"
          icon={<UserCircle size={20} />}
          label="Profile"
        />
                <NavItem
          to="/signin"
          icon={<LogOut size={20} />}
          label="Logout"
        />

      </div>
    </div>
  );
};

/* NAV ITEM COMPONENT */
const NavItem = ({ to, icon, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `sidebarItem ${isActive ? "active" : ""}`
      }
    >
      {icon}
      <span>{label}</span>
    </NavLink>
  );
};

export default Sidebar;