import React from 'react';
import "../styles/Portfolio.css";
import mfsQuiz from "../assets/images/mfs-quiz.png";
import mfsCountdown from "../assets/images/mfscountdown.png";
import positiveThoughts from "../assets/images/pt.png";
import coachella from "../assets/images/coachella.png";
import justDocIt from "../assets/images/just-doc-it.png"
import noteTaker from "../assets/images/note-taker.png"

const Portfolio = () => {
    return (
        <section id="portfolio-section">
            <h1 id="portfolio">Portfolio</h1>
            <div class="portfolio-card-sec">
            <div class="cards">
                <img src={mfsCountdown} alt="MFS Countdown" class="portfolio-img"/>
                <h4 class="img-caption">Motherland: Fort Salem Countdown</h4>
                <h5 class="img-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus accusantium, doloremque numquam ipsum aliquid repudiandae facere odit sequi consequuntur neque, ab animi voluptates. Sequi quisquam vero recusandae omnis eveniet blanditiis?</h5>
                <section class="buttons-section">
                    <a href="https://github.com/jamie-jones/MFS-s2-countdown" target="_blank" rel="noreferrer"><button class="btns"><h6>github repository</h6></button></a>
                    <div class="divider"/>
                    <a href="http://mfscountdown.com/" target="_blank" rel="noreferrer"><button class="btns"><h6>deployed application</h6></button></a>
                </section>
            </div>
            <div class="cards">
                    <img src={mfsQuiz} alt="MFS Quiz" class="portfolio-img"/>
                <h4 class="img-caption">Motherland: Fort Salem Specialization Quiz</h4>
                <h5 class="img-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus accusantium, doloremque numquam ipsum aliquid repudiandae facere odit sequi consequuntur neque, ab animi voluptates. Sequi quisquam vero recusandae omnis eveniet blanditiis?</h5>
                <section class="buttons-section">
                <a href="https://github.com/jamie-jones/motherland-fs-quiz" target="_blank" rel="noreferrer"><button class="btns"><h6>github repository</h6></button></a>
                <div class="divider"/>
                <a href="http://www.mfsquiz.com/" target="_blank" rel="noreferrer"><button class="btns"><h6>deployed application</h6></button></a>
                </section>
            </div>
            <div class="cards">
                    <img src={positiveThoughts} alt="Positive Thoughts" class="portfolio-img"/>
                <h4 class="img-caption">Positive Thoughts</h4>
                <h5 class="img-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus accusantium, doloremque numquam ipsum aliquid repudiandae facere odit sequi consequuntur neque, ab animi voluptates. Sequi quisquam vero recusandae omnis eveniet blanditiis?</h5>
                <section class="buttons-section">
                <a href="https://github.com/jamie-jones/Positive-Thoughts" target="_blank" rel="noreferrer"><button class="btns"><h6>github repository</h6></button></a>
                <div class="divider"/>
                <a href="http://www.positive-thoughts.org/" target="_blank" rel="noreferrer"><button class="btns"><h6>deployed application</h6></button></a>
</section>
            </div>
            </div>
            <br/>
            <div class="portfolio-card-sec">
            <div class="cards">
                    <img src={coachella} alt="Coachella" class="portfolio-img"/>
                <h4 class="img-caption">Coachella</h4>
                <h5 class="img-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus accusantium, doloremque numquam ipsum aliquid repudiandae facere odit sequi consequuntur neque, ab animi voluptates. Sequi quisquam vero recusandae omnis eveniet blanditiis?</h5>
                <section class="buttons-section">
                <a href="https://github.com/jamie-jones/Couchella" target="_blank" rel="noreferrer"><button class="btns"><h6>github repository</h6></button></a>
                <div class="divider"/>
                <a href="https://jadavianett.github.io/Couchella/" target="_blank" rel="noreferrer"><button class="btns"><h6>deployed application</h6></button></a>
            </section>
            </div>
            <div class="cards">
                    <img src={justDocIt} alt="Just Doc It" class="portfolio-img"/>
                <h4 class="img-caption">Just Doc It</h4>
                <h5 class="img-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus accusantium, doloremque numquam ipsum aliquid repudiandae facere odit sequi consequuntur neque, ab animi voluptates. Sequi quisquam vero recusandae omnis eveniet blanditiis?</h5>
                <section class="buttons-section">
                <a href="https://github.com/jamie-jones/Just-Doc-It" target="_blank" rel="noreferrer"><button class="btns"><h6>github repository</h6></button></a>
                <div class="divider"/>
                <a href="http://www.just-doc-it.com/" target="_blank" rel="noreferrer"><button class="btns"><h6>deployed application</h6></button></a>
            </section>
            </div>
            <div class="cards">
                    <img src={noteTaker} alt="Note Taker" class="portfolio-img"/>
                <h4 class="img-caption">Note Taker</h4>
                <h5 class="img-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus accusantium, doloremque numquam ipsum aliquid repudiandae facere odit sequi consequuntur neque, ab animi voluptates. Sequi quisquam vero recusandae omnis eveniet blanditiis?</h5>
                <section class="buttons-section">
                <a href="https://github.com/jamie-jones/Note-Taker-App" target="_blank" rel="noreferrer"><button class="btns"><h6>github repository</h6></button></a>
                <div class="divider"/>
                <a href="https://note-taker-jamie.herokuapp.com/" target="_blank" rel="noreferrer"><button class="btns"><h6>deployed application</h6></button></a>
                </section>
            </div>
            </div>
        </section>
    );
};

export default Portfolio;