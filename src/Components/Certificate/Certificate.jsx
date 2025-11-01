import React from "react";
import "./Certificate.css";


import cert1 from "../../assets/cert1.png";
import cert2 from "../../assets/cert2.png";
import cert3 from "../../assets/cert3.png";
import cert4 from "../../assets/cert4.jpeg";

const Certificate = () => {
  return (
    <div className="certificate-page">
      <h1 className="certificate-title">My Certificates</h1>

      <div className="certificate-grid">
        <div className="certificate-card">
            <a href="https://coursera.org/share/654f2127f6c8de3c9d158ee1b3f2e91f">
          <img src={cert4} alt="Certificate 4" />
          </a>
          <p>Google Data Analytics Professional Certificate</p>
          <p>Google</p>
        </div>

        <div className="certificate-card">
            <a href="https://coursera.org/share/fa049761c7e93431e8797dd8632d4be5">
          <img src={cert1} alt="Certificate 1" />
          </a>
          <p>HTML, CSS, and Javascript for Web Developers</p>
          <p>Johns Hopkins University</p>
        </div>

        <div className="certificate-card">
            <a href="https://coursera.org/share/29feac010079c4ad55b8818a8b84f75e">
          <img src={cert2} alt="Certificate 2" />
          </a>
          <p>Using Python to Access Web Data</p>
          <p>University of Michigan</p>
        </div>

        <div className="certificate-card">
            <a href="https://www.udemy.com/certificate/UC-58281cf8-6a3c-483e-bffc-996e54e006e4/">
          <img src={cert3} alt="Certificate 3" />
          </a>
          <p>Web Development</p>
          <p>Instructors Dr. Angela Yu</p>
        </div>

        

        
      </div>
    </div>
  );
};

export default Certificate;
