import "../styles/Dashboard.css";
import React from "react";
import WelcomeCard from "../components/WelcomeCard";
import StatsRow from "../components/StatsRow";

const Dashboard = () => {
  return (
    <div className="dashboard-wrapper">

      {/* ⭐ WELCOME SECTION */}
      <div className="dashboard-panel center">
        <WelcomeCard />
      </div>

      {/* ⭐ SEMESTER CALENDAR PANEL */}
      <div className="dashboard-panel">

        <h3 className="section-title">
          Semester Calendar - Spring 2026
        </h3>

        <div className="weekGrid">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="weekCard">
              <p className="weekTitle">Week {i + 1}</p>
              <p className="weekDate">
                Feb {i + 1} - Feb {i + 7}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* ⭐ STATS ROW PANEL */}
      <div className="dashboard-panel">
        <StatsRow />
      </div>

    </div>
  );
};

export default Dashboard;