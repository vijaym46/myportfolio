import {
	SiJavascript,
	SiHtml5,
	SiCss3,
	SiBootstrap,
	SiReact,
	SiGithub,
} from 'react-icons/si';
import { FaNodeJs, FaGitAlt } from 'react-icons/fa';
import githubrepo from './../../assets/techStack/github-repo.svg';
import './Myskills.css';
import { useContext } from 'react';
import { colorContext } from './../../App';

function Myskills() {
	const { primary, secondary, tertiary } = useContext(colorContext);
	const headingStyle = { color: primary };
	const textStyle = { color: secondary };
	return (
		<div className="myskills-wrapper">
			<div className="container-sm">
				<h3 className="skill-heading" style={headingStyle}>
					My Skills
				</h3>
				<div className="myskills-container">
					<div className="myskills">
						<div className="skill-content">
							<p className="skill-para" style={textStyle}>
								I've gained a solid understanding of web development concepts and have dedicated a
								lot of my free time to apply these concepts to real-world scenarios and
								applications.
							</p>
						</div>
						<div className="skill-icons">
							<SiReact />
							<SiJavascript />
							<SiHtml5 />
							<SiCss3 />
							<SiBootstrap />
							<SiGithub />
							<FaGitAlt />
						</div>
					</div>
					<div className="myskills-illustration">
						<img src={githubrepo} alt="github" aria-label="github repo image" />
					</div>
				</div>
			</div>
			<svg id="projects" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
				<path
					fill={tertiary}
					fillOpacity="1"
					d="M0,256L120,234.7C240,213,480,171,720,165.3C960,160,1200,192,1320,208L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
				></path>
			</svg>
		</div>
	);
}

export default Myskills;
