import React from "react";
import "../styles/StatsRow.css";

const StatsRow = () => {
  const stats = [
    { icon: "📚", number: "8", label: "Total Courses", color: "#EFF6FF" },
    { icon: "👨‍🎓", number: "247", label: "Total Students", color: "#EFF6FF" },
    { icon: "📊", number: "5", label: "Active Classes", color: "#EFF6FF" },
        { icon: "📄", number: "3", label: "PDF Generated", color: "#EFF6FF" },
  ];

  return (
    <div className="statsRow">
      {stats.map((item, index) => (
        <div className="statsCard" key={index}>
          
          <div className="iconBox" style={{ backgroundColor: item.color }}>
            {item.icon}
          </div>

          <div className="statsText">
            <h2>{item.number}</h2>
            <p>{item.label}</p>
          </div>

        </div>
      ))}
    </div>
  );
};

export default StatsRow;