import React from 'react'
import './About.css'
import profile_img from '../../assets/profileme.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Hi, I’m Suman Datta, a passionate Full-Stack Developer from West Bengal, India.
I specialize in building modern, responsive, and secure web applications using MERN Stack (MongoDB, Express, React, Node.js).</p>
                    <p>I enjoy solving real-world problems with technology and have worked on projects like a Secure Exam Handling System, WhatsApp Chat Analyzer, and Plant Disease Detection System.</p>
                    <p>My goal is to continuously learn and contribute to projects that make an impact, while growing as a developer and problem-solver.</p>

                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p> <hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>React JS</p> <hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>JavaScript</p> <hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>Node JS</p> <hr style={{width:"50%"}}/></div>

                </div>
                
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>6+</h1>
                <p>YEARS OF EDUCATION</p>

            </div>
            <hr/>
             <div className="about-achievement">
                <h1>10+</h1>
                <p>PROJECT COMPLETED</p>

            </div>
            <hr/>
             <div className="about-achievement">
                <h1>6+</h1>
                <p>HAPPY CLIENTS</p>

            </div>
            <hr/>
            
        </div>
      
    </div>
  )
}

export default About
