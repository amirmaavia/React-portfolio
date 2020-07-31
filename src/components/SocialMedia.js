import React from "react";
import "./SocialMedia.css";
import { socialMediaLink } from "../data/data";

function SocialMedia() {
  return (
    <div className="social-media-div"> 
      <a href={socialMediaLink.github} className="icon-button github" >
        <i className="fab fa-github"></i>
        <span></span>
      </a>

      <a href={socialMediaLink.linkedin} className="icon-button linkedin" >
        <i className="fab fa-linkedin-in"></i>
        <span></span>
      </a>

      <a href={`mailto:${socialMediaLink.gmail}`} className="icon-button google" >
        <i className="fab fa-google"></i>
        <span></span>
      </a>

      <a href={socialMediaLink.facebook} className="icon-button facebook" >
        <i className="fab fa-facebook-f"></i>
        <span></span>
      </a>
      
    </div>
  );
}
export default SocialMedia