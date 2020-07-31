import React from 'react'
import './skills.modules.css'
// import { skillsSection } from "../data/data";
import AOS from "aos"
const Skills = () => {
  AOS.init();
  return (
    <div className="main" id="skills">
      <h1>What i do</h1>
<p>CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</p>
<h5><b>Develop highly interactive Front end / User Interfaces for your web and mobile applications</b> </h5> 
<main class="wrapper">
  <article class="badge orange">
    <div class="rounded"><i class="fab fa-html5"></i></div>
  </article>
  <article class="badge blue">
    <div class="rounded"><i class="fab fa-css3-alt"></i></div>
  </article>
  <article class="badge gold">
    <div class="rounded"><i class="fab fa-js-square"></i></div>
  </article>
  <article class="badge red">
    <div class="rounded"><i class="fab fa-adobe"></i></div>
  </article>
  <article class="badge purple">
    <div class="rounded"><i class="fab fa-php"></i></div>
  </article>
  <article class="badge green">
    <div class="rounded"><i class="fab fa-node"></i></div>
  </article>
  <article class="badge crimson">
    <div class="rounded"><i class="fab fa-npm"></i></div>
  </article>
  <article class="badge steel">
    <div class="rounded"><i class="fab fa-python"></i></div>
  </article>
  <article class="badge pink">
    <div class="rounded"><i class="fab fa-sass"></i></div>
  </article>
  <article class="badge rebecca">
    <div class="rounded"><i class="fab fa-bootstrap"></i></div>
  </article>
</main>
      {/* <div className="skills-main-div">
      <div data-aos="flip-left" data-aos-duration="3000" data-aos-easing="ease-out-cubic">
        <div className="skills-image-div" style={{marginTop:"20px"}}>
          <img alt="Saad Working" src="https://d3kqdc25i4tl0t.cloudfront.net/articles/content/590_165792_skills.hero.jpg"/>
        </div>
      </div>

      <div data-aos="fade-left" data-aos-duration="3000">
        <div className="skills-text-div">
          <h1 className="skills-heading">{skillsSection.title} </h1>
          <p className="subTitle skills-text-subtitle">{skillsSection.subTitle}</p>
          <p className="softwareSkil">
            {skillsSection.softwareSkills.map(softwateskills => {
              return <span>{softwateskills}</span>;
            })}
          </p>
          <div>
            {skillsSection.skills.map(skills => {
              return <p className="subTitle skills-text">{skills}</p>;
            })}
          </div>
        </div>
      </div>
      </div> */}
    </div>
  );
}
   
export default Skills
