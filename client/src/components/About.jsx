import React from "react";
import "../styles/About.css";
import ProfilePic from "../assets/images/profile-pic.jpeg";

const About = () => {
	return (
		<div id="about-section">
			<h1 id="about-me">all about me</h1>
			<img id="profile-pic" src={ProfilePic} alt="Jamie Jones" />
			<h4>
				I am a Full Stack/Front End developer with a certificate in full stack
				web development with the Georgia Institute of Technology. I build
				beautiful user friendly and mobile responsive websites with HTML, CSS,
				and JavaScript. I use knowledge of Node.js, React.js, mySQL, and MongoDB
				in my sites as well as my artistic eye in layout and visuals for each
				application I make in order to keep users coming. I hope to learn new
				programming languages as I continue my career to keep progressing and
				making better and better apps.
				<br />
				<br />I currently live in the greater Savannah area of Georgia with my
				cat Ellie and my dog Chanel. I know three languages (English, Spanish,
				and Tagalog) and love to learn new languages and travel the world!
			</h4>
		</div>
	);
};

export default About;
