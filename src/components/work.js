import React from "react";
import "./styles/WorkCard.css";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";
import "./styles/Work.css";

const Work = () => {
  return (
    <div className="work-container">
      <div className="project-container">
        {WorkCardData.map((val, index) => {
          return (
            <WorkCard
              key={index}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              techstack={val.techstack}
              view={val.view}
              source={val.source}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
