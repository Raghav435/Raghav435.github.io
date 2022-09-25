import React from "react";
import "./styles/Stats.css";

const Stats = () => {
  return (
    <div className="stats_container">
      <h1 className="stats_title">STATISTICS</h1>
      <div className="stats_data">
        <div className="individualStat">
          <div>1200+</div>
          <div>
            <h3>Hours</h3> of Full Stack Coding
          </div>
        </div>

        <div className="individualStat">
          <div style={{border: "10px solid #7e2cde"}}>100+</div>
          <div>
            <h3>Hackerrank</h3>Problems
          </div>
        </div>

        <div className="individualStat">
          <div>200+</div>
          <div>
            <h3>Git</h3>Commits
          </div>
        </div>

        <div className="individualStat">
          <div style={{border: "10px solid #7e2cde"}}>20+</div>
          <div>
            <h3>Projects</h3>Done
          </div>
        </div>

        <div className="individualStat">
          <div>100+</div>
          <div>
            <h3>Hours</h3> of Soft Skills Sessions
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
