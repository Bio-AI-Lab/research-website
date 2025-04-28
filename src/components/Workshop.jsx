import React from "react";
import "./Workshop.scss";

const Workshop = () => {
  return (
    <div className="workshop-page">
      {/* Workshop Title Section */}
      <div className="workshop-header">
        <div>Upcoming Workshops</div>
      </div>

      {/* Workshop Content Section */}
      <div className="workshop-content">
        <div className="workshop-item fade-in-left">
          <div>Session 1</div>
        </div>
        <div className="workshop-item fade-in-right">
          <div>Session 2</div>
        </div>
        <div className="workshop-item fade-in-left">
          <div>Session 3</div>
        </div>
        <div className="workshop-item fade-in-right">
          <div>Session 4</div>
        </div>
      </div>
    </div>
  );
};

export default Workshop;
