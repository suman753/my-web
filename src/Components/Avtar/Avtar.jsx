import React from 'react'
import './Avtar.css'
import profile_img from '../../assets/profileme1.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Avtar = () => {
  return (
    <div className='avtar'>
        <img src={profile_img} alt="" />
        <h1><span>Hi, I’m Suman Datta.</span> Full-Stack Developer<br></br>from West Bengal, INDIA.</h1>
        <p>I love coding, solving problems, and creating amazing web experiences. <br></br> MERN & Django Enthusiast. </p>
        <div className="avtar-action">
            <div className="avtar-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <div className="avtar-resume"><a href='https://drive.google.com/file/d/1V4LkheuF0QD8QHnILLiaUoVS24oVw5Lr/view?usp=sharing'> My Resume</a></div>
        </div>
    </div>
  )
}

export default Avtar
