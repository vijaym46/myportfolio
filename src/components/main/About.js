import { Button } from '@mui/material';
import './About.css';
import { useContext } from 'react';
import { colorContext } from './../../App';
import mine from './../../assets/mine.jpg';
import resume from './../../assets/Vijay_M.pdf';

function About() {
	const { secondary } = useContext(colorContext);
	const textColor = { color: secondary };
	return (
		<div className="about-for-svg " id="about">
			<div className="container-sm about-wrapper">
				{/* This will hold about myself */}
				<div className="about-me" style={textColor}>
					<div className="about-content">
						<h3 className="myname">I'm Vijay</h3>
						<h4>React Developer</h4>
						<p>
							&emsp; &emsp; React Developer with internship experience in building responsive and
							user-friendly web applications. <br />
							&emsp; &emsp; Proficient in JavaScript, React.js, Redux, and
							modern web technologies with a strong understanding. Skilled in state
							management and API integration.{' '}
							<br />
						</p>
					</div>

					{/* Buttons to resume an contact me */}
					<div className="about-btns">
						<Button className="resume-btn" variant="outlined" color="primary">
							<a href={resume} target="_blank" rel="noreferrer">
								Resume
							</a>
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
