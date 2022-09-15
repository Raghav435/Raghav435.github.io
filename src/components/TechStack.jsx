import * as React from "react";
import { useState } from "react";
import "../components/styles/TechStack.css";
import html from "../assets/techstack/html.png";
import css from "../assets/techstack/css.png";
import js from "../assets/techstack/js.png";
import react from "../assets/techstack/react.png";
import redux from "../assets/techstack/redux.png";
import nodejs from "../assets/techstack/nodejs3.png";
import mongodb from "../assets/techstack/mongoDB.png";
import expressjs from "../assets/techstack/expressjs2.png";
import bootstrap from "../assets/techstack/bootstrap.png";
import vscode from "../assets/techstack/vscode.png";
import github from "../assets/techstack/github.png";
import npm from "../assets/techstack/npm.png";
import postman from "../assets/techstack/postman.png";
import codesandbox from "../assets/techstack/codesandbox.png";

const TechStack = () => {
  return (
    <div className="tech-container">
      <div className="heading">
        <h1 style={{ color: "yellow", marginTop: "4rem" }}>FRONTEND</h1>
      </div>

      <div className="techs">
        <img src={html} title="html" alt="html" />
        <img src={css} title="CSS" alt="css" />
        <img src={js} title="JavaScript" alt="js" />
        <img src={react} title="React" alt="react" />
        <img src={redux} title="Redux" alt="redux" />
        <img src={bootstrap} title="Bootstrap" alt="bootstrap" />
        <img src={npm} title="NPM" alt="NPM" />
      </div>

      <div className="heading">
        <h1 style={{ color: "yellow", marginTop: "4rem" }}>BACKEND</h1>
      </div>

      <div className="techs">
        <img src={nodejs} title="NodeJs" alt="nodejs" />
        <img src={expressjs} title="NodeJs" alt="expressjs" />
        <img src={mongodb} title="NodeJs" alt="mongodb" />
      </div>

      <div className="heading">
        <h1 style={{ color: "yellow", marginTop: "4rem" }}>TOOLS</h1>
      </div>

      <div className="techs">
        <img src={vscode} title="Visual Studio Code" alt="vscode" />
        <img
          style={{ marginBottom: "20px" }}
          height="100px"
          src={github}
          title="Github"
          alt="Github"
        />
        <img src={postman} title="Postman" alt="Postman" />
        <img height="100px" src={codesandbox} title="Postman" alt="Postman" />
      </div>
    </div>
  );
};

export default TechStack;
