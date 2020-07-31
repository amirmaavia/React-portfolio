import React from 'react'
import "./navbar.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Navbar = () => {
    return (
        
            <div data-aos="fade-down" data-aos-duration="3000" data-aos-easing="linear">
                <header className="header">
                    <a href="https://www.facebook.com/profile.php?id=100009223576836">
                       <h2 className="logo"><b>A|M</b></h2>
                    </a>
                    <input className="menu-btn" type="checkbox" id="menu-btn" />
                    <label className="menu-icon" htmlFor="menu-btn">
                        <span className="navicon"></span>
                    </label>
                  <ul className="menu">
                        <li>
                            <a href="#about">About Me</a>
                        </li>
                        <li>
                            <a href="#skills">Skills</a>
                        </li>
                        
                        
                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                        {/* <li>
                            <a href="#services">Services</a>
                        </li> */}
                        <li>
                            <a href="#contact">Contact Me</a>
                        </li>
                    </ul>
                </header>
            </div>
        )
                    }

export default Navbar


