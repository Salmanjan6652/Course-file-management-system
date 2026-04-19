import React from "react";
import "../styles/Welcomecard.css";
import { UserCircle2 } from "lucide-react";

const WelcomeCard = () => {
  return (
    <div className="welcome-card">

      {/* Male Avatar ICON */}
      <div className="profile-icon">
        <UserCircle2 size={70} />
      </div>

      {/* Text Section */}
      <div className="text-section">
        <h3>Welcome back</h3>
        <h2>Syed Ahmed Khan</h2>

        <span className="badge">Computer Science</span>
      </div>

    </div>
  );
};

export default WelcomeCard;