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
                <a href="http://mfscountdown.com/" target="_blank" rel="noreferrer">
                    <img src={mfsCountdown} alt="MFS Countdown" class="portfolio-img"/>
                </a>
                <h4 class="img-caption">Motherland: Fort Salem Countdown</h4>
                <h5 class="img-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus accusantium, doloremque numquam ipsum aliquid repudiandae facere odit sequi consequuntur neque, ab animi voluptates. Sequi quisquam vero recusandae omnis eveniet blanditiis?</h5>
            </div>
            <div class="cards">
            <a href="http://www.mfsquiz.com/" target="_blank" rel="noreferrer">
                    <img src={mfsQuiz} alt="MFS Quiz" class="portfolio-img"/>
                </a>
                <h4 class="img-caption">Motherland: Fort Salem Specialization Quiz</h4>
                <h5 class="img-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus accusantium, doloremque numquam ipsum aliquid repudiandae facere odit sequi consequuntur neque, ab animi voluptates. Sequi quisquam vero recusandae omnis eveniet blanditiis?</h5>
            </div>
            <div class="cards">
            <a href="http://www.positive-thoughts.org/" target="_blank" rel="noreferrer">
                    <img src={positiveThoughts} alt="Positive Thoughts" class="portfolio-img"/>
                </a>
                <h4 class="img-caption">Positive Thoughts</h4>
                <h5 class="img-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus accusantium, doloremque numquam ipsum aliquid repudiandae facere odit sequi consequuntur neque, ab animi voluptates. Sequi quisquam vero recusandae omnis eveniet blanditiis?</h5>
            </div>
            </div>
            <br/>
            <div class="portfolio-card-sec">
            <div class="cards">
            <a href="https://jadavianett.github.io/Couchella/" target="_blank" rel="noreferrer">
                    <img src={coachella} alt="Coachella" class="portfolio-img"/>
                </a>
                <h4 class="img-caption">Coachella</h4>
                <h5 class="img-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus accusantium, doloremque numquam ipsum aliquid repudiandae facere odit sequi consequuntur neque, ab animi voluptates. Sequi quisquam vero recusandae omnis eveniet blanditiis?</h5>
            </div>
            <div class="cards">
            <a href="http://www.just-doc-it.com/" target="_blank" rel="noreferrer">
                    <img src={justDocIt} alt="Just Doc It" class="portfolio-img"/>
                </a>
                <h4 class="img-caption">Just Doc It</h4>
                <h5 class="img-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus accusantium, doloremque numquam ipsum aliquid repudiandae facere odit sequi consequuntur neque, ab animi voluptates. Sequi quisquam vero recusandae omnis eveniet blanditiis?</h5>
            </div>
            <div class="cards">
            <a href="https://note-taker-jamie.herokuapp.com/" target="_blank" rel="noreferrer">
                    <img src={noteTaker} alt="Note Taker" class="portfolio-img"/>
                </a>
                <h4 class="img-caption">Note Taker</h4>
                <h5 class="img-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus accusantium, doloremque numquam ipsum aliquid repudiandae facere odit sequi consequuntur neque, ab animi voluptates. Sequi quisquam vero recusandae omnis eveniet blanditiis?</h5>
            </div>
            </div>
        </section>
        //         <figure class="img-section">
        //         <a href="http://www.just-doc-it.com/" target="_blank" rel="noreferrer">
        //         <img src={justDocIt} alt="Just Doc It"  class="portfolio-img"/>
        //         </a>
        //         <a href="https://jadavianett.github.io/Couchella/" target="_blank" rel="noreferrer">
        //         <img src={Coachella} alt="Coachella"  class="portfolio-img"/>
        //         </a>
        //     </figure>
        //         <br/>
        //         <figure class="img-section">
        //             <a href="http://www.positive-thoughts.org/" target="_blank" rel="noreferrer">
        //                 <img src={PT} alt="Positive Thoughts" class="portfolio-img"/>
        //             </a>
        //         </figure>
        // </div>
    );
};

export default Portfolio;