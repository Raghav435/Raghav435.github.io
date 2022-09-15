import React from "react";
import "./styles/WorkCard.css";
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="image" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <p style={{ color: "teal", marginTop: "1rem" }}>
          Tech Stack : {props.techstack}
        </p>
        <div className="pro-btns">
          <a  target="_blank" href={props.view} className="btn">
            View
          </a>
          <a  target="_blank" href={props.source} className="btn">
            Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
