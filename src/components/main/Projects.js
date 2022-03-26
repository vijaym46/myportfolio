import { Button } from '@mui/material';
import './Projects.css';
import { useContext } from 'react';
import { colorContext } from './../../App';
import Gastly from './../../assets/pokecards/Gastly.png';
import Pikachu from './../../assets/pokecards/Pikachu.png';
import realLogin from './../../assets/equipment/realLogin.png';
import realhome from './../../assets/equipment/realhome.png';
import realCart from './../../assets/equipment/real-productCart.png';

function Projects() {
	const { bg, primary, secondary, tertiary } = useContext(colorContext);

	const projectList = [
		{
			name: 'Equipment Rental',
			about:
				'To rent electrical equipments to vehicles. In this site one can rent things they need for specific ocassions.\n Customers are charged per hour for the product from the time they get to time they return.',
			why: "Always had things that I used only once and getting dust in my space. So why isn't there any renting site for all the products. This is one that spraked me to create this site.",
			whatnext: ['To make option available for people to rent out their unused items for rent.'],
			imgSrc: [realLogin, realhome, realCart],
			// img1: pokeCard,
			// img2: pokecardtry,
			github: 'https://github.com/Arun3sh/equipmentrental',
			live: 'https://real-arun.netlify.app/',
			bg: tertiary,
			text: secondary,
			heading: primary,
		},
		{
			name: 'Pokemon Card',
			about:
				'This web app is used to find pokemons attributes. Here one can search pokemon based on their type and also to get a specific pokemon.',
			why: "I always wanted to know about the pokemon based on their type and their stats and that's why I created a site to search and find your fvourite pokemon's stat.",
			whatnext: [
				'Planning on adding their strength and weak against other pokemon',
				'Best attacks to choose against opponent.',
			],
			imgSrc: [Gastly, Pikachu],
			// img1: Gastly,
			// img2: Pikachu,
			github: 'https://github.com/Arun3sh/Pokemon_Cards',
			live: 'https://searchpokemoncard.netlify.app/',
			bg: primary,
			text: secondary,
			heading: bg,
		},
	];
	// Make sure that the bg of next div is the previous svg fill
	return (
		<div className="projects-wrapper">
			{/* With project list will traverse and create projects */}
			{projectList.map(
				({ name, about, why, whatnext, imgSrc, github, live, bg, text, heading }, index) => (
					<div className="project-withsvg" key={index} style={{ backgroundColor: bg }}>
						<div className="container-sm project">
							{/* Project is divided into 2 parts here all the wordings will come */}
							<div className="project-content" style={{ color: heading }}>
								<h2 className="project-title">{name}</h2>

								{/* About project */}
								<div className="project-about">
									{/* <h5>About project</h5> */}
									<p className="project-info" style={{ color: text }}>
										{about}
									</p>
									<p className="project-info" style={{ color: text }}>
										{why}
									</p>
								</div>

								{/* Future upgrades */}
								<div className="project-future">
									<h5>Future Uprdaes</h5>

									<ul className="project-info" style={{ color: text }}>
										{whatnext.map((e, index) => (
											<li key={index}>{e}</li>
										))}
									</ul>
								</div>

								{/* Button for source code and live link */}
								<div className="project-link-btn">
									<Button variant="contained" size="large">
										<a target="_blank" rel="noreferrer" href={live}>
											Live
										</a>
									</Button>
									<Button variant="text">
										<a target="_blank" href={github}>
											Github repo
										</a>
									</Button>
								</div>
							</div>

							{/* Project images will be displayed here */}
							<div className="project-img">
								{imgSrc.map((e, index) => (
									<div
										key={index}
										className={'Layer-' + index + name}
										style={{ backgroundImage: `url(${e})` }}
									></div>
								))}
							</div>
						</div>

						<svg className="for-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
							<path
								fill={heading}
								fillOpacity="1"
								d="M0,224L34.3,202.7C68.6,181,137,139,206,144C274.3,149,343,203,411,208C480,213,549,171,617,176C685.7,181,754,235,823,250.7C891.4,267,960,245,1029,229.3C1097.1,213,1166,203,1234,213.3C1302.9,224,1371,256,1406,272L1440,288L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
							></path>
						</svg>
					</div>
				)
			)}
		</div>
	);
}

export default Projects;
