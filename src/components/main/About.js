import { Button } from '@mui/material';
import './About.css';
import { useContext } from 'react';
import { colorContext } from './../../App';
import mine from './../../assets/mine.jpg';

function About() {
	const { secondary, tertiary } = useContext(colorContext);
	const textColor = { color: secondary };
	return (
		<div className="about-for-svg " id="about">
			<div className="container-sm about-wrapper">
				{/* This will hold about myself */}
				<div className="about-me" style={textColor}>
					<div className="about-content">
						<h3 className="myname">I'm Aruneshwaran</h3>
						<h4>A Full Stack Developer</h4>
						<p>
							I am a Software Engineer trying get better every day. I've choosen to be a developer
							by interest.
						</p>
					</div>

					{/* Buttons to resume an contact me */}
					<div className="about-btns">
						<Button className="resume-btn" variant="outlined" color="primary">
							Resume
						</Button>
						<Button variant="contained" color="primary" href="#contact">
							Hire me
						</Button>
					</div>
				</div>

				{/* Profile picture */}
				<div className="my-profile">
					<img src={mine} alt="broken" aria-label="my picture" />
				</div>
			</div>
			<svg id="projects" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
				<path
					fill={tertiary}
					fillOpacity="1"
					d="M0,224L120,186.7C240,149,480,75,720,85.3C960,96,1200,192,1320,240L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
				></path>
			</svg>
		</div>
	);
}
export default About;
