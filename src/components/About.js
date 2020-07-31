import React from 'react'
import "./about.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

// ..
AOS.init();
const About = () => {
    return (
        <div className="main" id="about">
        <div className="skills-main-div">
        <div data-aos="flip-left" data-aos-duration="3000" data-aos-easing="ease-out-cubic">
          <div className="skills-image-div" style={{marginTop:"20px"}}>
            <img alt="Saad Working" src="https://i.pinimg.com/originals/e4/b2/97/e4b297b2854e8c83136f5a52dda45cfb.jpg"/>
          </div>
        </div>
  
        <div data-aos="fade-left" data-aos-duration="3000">
          <div className="skills-text-div">
            <h1 className="skills-heading"> About us </h1>
            <p><b>My Name Is Amir Maavia</b></p>
            <p className="subTitle skills-text-subtitle"><b>Develop highly interactive Front end / User Interfaces for your web and mobile applications</b></p>
            <p className="softwareSkil">
            
             
             
            </p>
            <div>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }

export default About
