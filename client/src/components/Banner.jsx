import React from "react";
import "../styles/Banner.css"
import pdf from "../assets/images/jamie-jones-portfolio.pdf";

const Banner = () => {
    return(
        <div id="banner">
                <h1 id="my-name"> <span></span>I am Jamie Jones</h1>
                <h4 id="web-dev"> and i am a web developer</h4>
                <section id="icons">
                <a href="https://www.linkedin.com/in/jamie-jones14/" target="_blank" rel="noreferrer"><i class="fab fa-2x fa-linkedin"></i></a>
                <a href="https://github.com/jamie-jones" target="_blank" rel="noreferrer"><i class="fab fa-2x fa-github-square"></i></a>
                <a href="mailto: jamie.mar.jones14@gmail.com" target="_blank" rel="noopener noreferrer"><i class="far fa-2x fa-envelope"></i></a>
                <a href={pdf} target="_blank" rel="noreferrer"><i class="fas fa-2x fa-file"></i></a>
                </section>
        </div>
    )
}

export default Banner;