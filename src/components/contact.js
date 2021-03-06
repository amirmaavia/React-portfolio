
import React from 'react'
import {contact} from "../data/data"
import "./contact.css"
import SocialMedia from "./SocialMedia"
import AOS from "aos"
function Contact() {
AOS.init();
    return (
        <div className="main contact-margin-top" id="contact">
            <div className="contact-div-main">
            <div data-aos="fade-right" data-aos-duration="3000">
                <div className="contact-header">
                    <h1 className="heading contact-title">{contact.heading}</h1>
                    <p className="subTitle contact-subtitle">{contact.subheading}</p>

                    <div className="contact-text-div">
                        <p className="contact-detail">{`Call me at: ${contact.call}`}</p>
                        <p className="contact-detail-email">{`Email: ${contact.mail}`}</p>
                        <br/>
                       <center> <SocialMedia/> </center>
                    </div>
                </div>
            </div>
            <div data-aos="flip-left" data-aos-duration="3000" data-aos-easing="ease-out-cubic">
                <div className="contact-image-div">
                    <img alt="My Pic" src={contact.image}></img>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Contact
