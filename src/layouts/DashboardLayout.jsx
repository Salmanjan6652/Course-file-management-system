import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const DashboardLayout = () => {
  return (
    <div className="layout">

      {/* SIDEBAR (NO EXTRA WRAPPER) */}
      <Sidebar />

      {/* MAIN AREA */}
      <div className="main">

        {/* NAVBAR */}
        <Navbar />

        {/* CONTENT */}
        <div className="content">
          <Outlet />
        </div>

      </div>

    </div>
  );
};

export default DashboardLayout;