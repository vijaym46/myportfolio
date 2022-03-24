import { Button } from '@mui/material';
import './About.css';
import { useContext } from 'react';
import { colorContext } from './../../App';
import mine from './../../assets/mine.jpg';

function About() {
	const { secondary } = useContext(colorContext);
	const textColor = { color: secondary };
	return (
		<div className="container about-wrapper" id="about">
			{/* This will hold about myself */}
			<div className="about-me" style={textColor}>
				<div className="about-content">
					<h3 className="myname">I'm Aruneshwaran</h3>
					<h4>A Full Stack Developer</h4>
					<p>
						I am a Software Engineer trying get better every day. I've choosen to be a developer by
						interest.
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
	);
}
export default About;
