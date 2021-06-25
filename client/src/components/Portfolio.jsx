import React from "react";
import "../styles/Portfolio.css";
import mfsQuiz from "../assets/images/mfs-quiz.png";
import mfsCountdown from "../assets/images/mfscountdown.png";
import positiveThoughts from "../assets/images/pt.png";
import coachella from "../assets/images/coachella.png";
import justDocIt from "../assets/images/just-doc-it.png";
import noteTaker from "../assets/images/note-taker.png";

const Portfolio = () => {
	return (
		<section id="portfolio-section">
			<h1 id="portfolio">Portfolio</h1>
			<div class="portfolio-card-sec">
				<div class="cards">
					<img src={mfsCountdown} alt="MFS Countdown" class="portfolio-img" />
					<h3 class="img-caption">Motherland: Fort Salem Countdown</h3>
					<h5 class="img-description">
						Keep track of when your favorite witches of Salem are back on screen
						with the Motherland: Fort Salem Countdown! Starting off as a season
						two premiere countdown, we've continued to count down to each
						episode as the previous episode airs. Not only can you watch the
						time tick by, but you can also enjoy the beautiful artwork made by
						talented fans of the show! If you have art you'd like to be featured
						on the site, you can submit it with the form under the countdown!
						Happy viewing!
					</h5>
					<section class="buttons-section">
						<a
							href="https://github.com/jamie-jones/MFS-s2-countdown"
							target="_blank"
							rel="noreferrer"
						>
							<button class="btns">
								<h6>github repository</h6>
							</button>
						</a>
						<div class="divider" />
						<a href="http://mfscountdown.com/" target="_blank" rel="noreferrer">
							<button class="btns">
								<h6>deployed application</h6>
							</button>
						</a>
					</section>
				</div>
				<div class="cards">
					<img src={mfsQuiz} alt="MFS Quiz" class="portfolio-img" />
					<h3 class="img-caption">
						Motherland: Fort Salem Specialization Quiz
					</h3>
					<h5 class="img-description">
						Find out which specialization you would be in in this witches army
						with this fanmade Motherland: Fort Salem specialization quiz! Where
						would you find yourself in Fort Salem? Creating storms with your
						fellow Blasters? Seeing what others cannot as a Knower? Helping
						others like a Fixer? Or perhaps you'll be working on the macabre
						side as a Necro? Take the quiz and you may be surprised!
					</h5>
					<section class="buttons-section">
						<a
							href="https://github.com/jamie-jones/motherland-fs-quiz"
							target="_blank"
							rel="noreferrer"
						>
							<button class="btns">
								<h6>github repository</h6>
							</button>
						</a>
						<div class="divider" />
						<a href="http://www.mfsquiz.com/" target="_blank" rel="noreferrer">
							<button class="btns">
								<h6>deployed application</h6>
							</button>
						</a>
					</section>
				</div>
				<div class="cards">
					<img
						src={positiveThoughts}
						alt="Positive Thoughts"
						class="portfolio-img"
					/>
					<h3 class="img-caption">Positive Thoughts</h3>
					<h5 class="img-description">
						Often times people need their own personal cheerleader or motivator
						to help them through tough times. With Positive Thoughts, you have
						that. PT will send you prompts via text message throughout the days
						to help you get on your feet and <span>do</span> something. You will
						also find a list of hotlines for easy access in case of emergency.
					</h5>
					<section class="buttons-section">
						<a
							href="https://github.com/jamie-jones/Positive-Thoughts"
							target="_blank"
							rel="noreferrer"
						>
							<button class="btns">
								<h6>github repository</h6>
							</button>
						</a>
						<div class="divider" />
						<a
							href="http://www.positive-thoughts.org/"
							target="_blank"
							rel="noreferrer"
						>
							<button class="btns">
								<h6>deployed application</h6>
							</button>
						</a>
					</section>
				</div>
			</div>
			<br />
			<div class="portfolio-card-sec">
				<div class="cards">
					<img src={coachella} alt="Coachella" class="portfolio-img" />
					<h3 class="img-caption">Coachella</h3>
					<h5 class="img-description">
						For music enthusiasts and concert-goers who are unable to attent
						live shows, we bring you Coachella! A project idea inspired by the
						COVID-19 pandemic making it impossible to go to concerts, my team
						and I came up with this brilliant idea to bring the concerts to{" "}
						<span>you!</span> You can pick from a handful of artists withing a
						handful of genres and sit back and relax while their most recent and
						HD concert plays in the safety of your own home!
					</h5>
					<section class="buttons-section">
						<a
							href="https://github.com/jamie-jones/Couchella"
							target="_blank"
							rel="noreferrer"
						>
							<button class="btns">
								<h6>github repository</h6>
							</button>
						</a>
						<div class="divider" />
						<a
							href="https://jadavianett.github.io/Couchella/"
							target="_blank"
							rel="noreferrer"
						>
							<button class="btns">
								<h6>deployed application</h6>
							</button>
						</a>
					</section>
				</div>
				<div class="cards">
					<img src={justDocIt} alt="Just Doc It" class="portfolio-img" />
					<h3 class="img-caption">Just Doc It</h3>
					<h5 class="img-description">
						The concept for this project came from project member "Jimmy" and
						the inspiration for it was his current work experience as a high
						school athletic trainer. Jimmy interacts with many athletes across
						different sports at odd times and in busy settings. He needs a
						simple documentation system to record athletes' sports-related
						injuries and ailments along with their treatment and rehab plans and
						progress notes. To make it easier for him, we came up with Just Doc
						It to do just that.
					</h5>
					<section class="buttons-section">
						<a
							href="https://github.com/jamie-jones/Just-Doc-It"
							target="_blank"
							rel="noreferrer"
						>
							<button class="btns">
								<h6>github repository</h6>
							</button>
						</a>
						<div class="divider" />
						<a
							href="http://www.just-doc-it.com/"
							target="_blank"
							rel="noreferrer"
						>
							<button class="btns">
								<h6>deployed application</h6>
							</button>
						</a>
					</section>
				</div>
				<div class="cards">
					<img src={noteTaker} alt="Note Taker" class="portfolio-img" />
					<h3 class="img-caption">Note Taker</h3>
					<h5 class="img-description">
						Do you need a good daily planner? How about somewhere you can take
						notes on your computer? Look no further, for this is the perfect
						place to do so! Simple to use, all you need to do to is add a title
						to the note, write your note, and hit the save button and your note
						is up and ready for you to look at later! When you no longer need
						the note, just delete it! Easy!
					</h5>
					<section class="buttons-section">
						<a
							href="https://github.com/jamie-jones/Note-Taker-App"
							target="_blank"
							rel="noreferrer"
						>
							<button class="btns">
								<h6>github repository</h6>
							</button>
						</a>
						<div class="divider" />
						<a
							href="https://note-taker-jamie.herokuapp.com/"
							target="_blank"
							rel="noreferrer"
						>
							<button class="btns">
								<h6>deployed application</h6>
							</button>
						</a>
					</section>
				</div>
			</div>
            <br/>
            <br/>
		</section>
	);
};

export default Portfolio;
