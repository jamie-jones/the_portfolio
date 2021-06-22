import React from 'react';
import "../styles/About.css";
import ProfilePic from "../assets/images/profile-pic.jpeg"

const About = () => {
    return (
        <div id="about-section">
            <h1 id="about-me">all about me</h1>
            <img id="profile-pic" src={ProfilePic} alt="Jamie Jones"/>
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum obcaecati incidunt cumque enim nisi quia facilis corporis. Provident libero illo possimus quas neque modi quibusdam fugit architecto quidem, eligendi voluptatibus!
                <br/>
                <br/>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, natus, rerum eius illum fugiat maxime accusamus assumenda ipsam, quo similique non quidem vero dolores commodi fuga culpa totam quod modi.
            </h4>
        </div>
    );
};

export default About;