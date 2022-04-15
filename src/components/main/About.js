import { Button } from '@mui/material';
import './About.css';
import { useContext } from 'react';
import { colorContext } from './../../App';
import mine from './../../assets/mine.jpg';
import { Link } from 'react-router-dom';

function About() {
	const { secondary } = useContext(colorContext);
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
							&emsp; &emsp; Software Engineer dedicated to improving skills through hands-on
							learning and development work. <br />
							&emsp; &emsp; Proficient in mobile and desktop development environments. Adept at
							using HTML5, JavaScript and other programming languages to produce clean code.
							Well-organized and collaborative with strong communication and analytical abilities.{' '}
							<br />
							&emsp; &emsp; Having worked in a Customer Support role, I'm capable to understanding
							Customer needs and working along to acheive desired result.
						</p>
					</div>

					{/* Buttons to resume an contact me */}
					<div className="about-btns">
						<Button className="resume-btn" variant="outlined" color="primary">
							<Link
								to={{
									pathname:
										'https://drive.google.com/u/0/uc?id=1UDsSwDAyjjdfyQni8G5zimYXV3mRS9ZV&export=download',
								}}
								target="_blank"
							>
								Resume
							</Link>
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
		</div>
	);
}
export default About;
