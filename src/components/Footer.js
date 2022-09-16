import React from "react";
import "./styles/Footer.css";
import {
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaMedium,
  FaGithub,
  FaHackerrank,
} from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Lucknow, Uttar Pradesh</p>
            </div>
          </div>
          <div className="location">
            <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>+918423749570</p>
            </div>
          </div>
          <div className="location">
            <FaMailBulk
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <div>
              <p>shuklaraghav435@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="right">
          <h4>THANK YOU</h4>
          <p>FOR VISITING MY PORTFOLIO</p>
          <div className="social">
            <a target="blank" href="https://www.linkedin.com/in/raghav-shukla-8b0288162/">
              <FaLinkedin
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>

            <a target="blank" href="https://github.com/Raghav435">
              <FaGithub
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
            <a target="blank" href="https://www.hackerrank.com/shuklaraghav435">
              <FaHackerrank
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
            <a target="blank" href="https://medium.com/me/stories/drafts">
              <FaMedium
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
