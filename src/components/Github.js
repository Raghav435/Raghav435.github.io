import React from "react";
import Githubcalendar from "react-github-calendar";
import "./styles/Github.css";

const Github = () => {
  const colourTheme = {
    background: "transparent",
    text: "#ffffff",
    grade4: "#8400b8",
    grade3: "#b22ff4",
    grade2: "#b265f6",
    grade1: "#c084f5",
    grade0: "#ecd9fc",
  };
  return (
    <div className="github-container">
      <h2 className="section-title" style={{fontSize: "3rem",color:"Teal", margin: "3rem"}}>GitHub Stats</h2>
      <div className="github">
        <div className="github-stats">
          <img
          className="github-stats-img"
            src="https://github-readme-stats.vercel.app/api?username=raghav435&show_icons=true&theme=radical"
            alt=""
          />
          <br />
          <img
           className="github-stats-img"
            src="https://github-readme-streak-stats.herokuapp.com?user=raghav435&theme=react&hide_border=true)](https://git.io/streak-stats"
            alt=""
          />
          <br />
         
        </div>
      </div>

      <h1
        className="github_heading"
        style={{
          fontSize: "3rem",
          marginTop: "3rem",
          marginBottom: "4rem",
          color: "teal",
          textAlign: "center",
        }}
      >
        DAYS I CODE
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
          padding: "1rem",
          backgroundColor: "#ffff",
        }}
      >
        <Githubcalendar
          username="Raghav435"
          blockSize={15}
          blockMargin={5}
          theme={colourTheme}
          fontSize={16}
        />
      </div>
    </div>
  );
};

export default Github;
