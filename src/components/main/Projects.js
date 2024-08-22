import { Button } from '@mui/material';
import './Projects.css';
import { useContext } from 'react';
import { colorContext } from './../../App';
import realLogin from './../../assets/netflix/realLogin.jpeg';
import realhome from './../../assets/netflix/realhome.jpeg';
import realCart from './../../assets/netflix/real-productCart.jpeg';
import todolist from './../../assets/todo-List/todolist.jpeg';
import search from './../../assets/todo-List/search.jpeg';
import booksky from './../../assets/booksky/bookcollection.jpeg';
import reacticon from './../../assets/techStack/react.png';
import netlifyicon from './../../assets/techStack/netlify-icon.svg';
import bootstrapicon from './../../assets/techStack/bootstrap.svg';
import javascripticon from './../../assets/techStack/javascript.svg';
import htmlicon from './../../assets/techStack/html.png';
import cssicon from './../../assets/techStack/css.png';

function Projects() {
	const { bg, primary, secondary, tertiary } = useContext(colorContext);
	const bgColor = bg;
	const projectList = [
		{
			name: 'Netflix clone',
			about:
				'Netflix is a global streaming service offering a vast library of movies, TV shows, and original content across various genres. It is known for revolutionizing how people consume media with its on-demand, ad-free experience.',
			why: "I use Netflix for its convenience, vast content library, and personalized recommendations. It offers a diverse selection of movies, TV shows, documentaries, and original content that can be streamed anytime, anywhere, without commercials.",
			whatnext: ['To make option available for people to login in.'],
			imgSrc: [realLogin, realhome, realCart],
			techStack: [
				javascripticon,
				htmlicon,
				cssicon,
				netlifyicon,
			],
			credentials: [{ email: 'admin@real.com', password: 'Admin@123' }],
			github: 'https://github.com/vijaym46/Netflix-clone',
			live: 'https://warm-basbousa-e9fa08.netlify.app/',
			bg: tertiary,
			text: secondary,
			heading: primary,
		},
		{
			name: 'Todo-List - For organizing tasks',
			about:
				'A to-do list is a simple tool for organizing tasks and managing productivity. It helps prioritize and track daily activities, ensuring nothing is overlooked. ',
			why: 'It was a away to stay organized, manage time effectively, and increase productivity.',
			whatnext: ['To make remainder available.'],
			imgSrc: [todolist, search],
			techStack: [
				reacticon,
				bootstrapicon,
				netlifyicon,
			],
			credentials: [
				{ email: 'peter@doc.com', password: 'Doc@123' },
				{ email: 'admin@real.com', password: 'Admin@123' },
			],
			github: 'https://github.com/vijaym46/Todo-List-React',
			live: 'https://todo-list-vijaym46.netlify.app/',
			bg: primary,
			text: secondary,
			heading: tertiary,
		},
		{
			name: 'BookSky - To manage your books',
			about:
				'BookVault is a secure online platform that allows users to store, organize, and manage book titles, author names, and descriptions. Perfect for bibliophiles and writers, BookVault keeps your literary collections and ideas easily accessible and well-organized in one central location. ',
			why: 'It helps me to maintain organized and detailed records of my favourite book',
			whatnext: ['To make feature to connect with like-minded readers.'],
			imgSrc: [booksky],
			techStack: [
				javascripticon,
				htmlicon,
				cssicon,
				netlifyicon,
			],
			credentials: [],
			github: 'https://github.com/vijaym46/BookSky',
			live: 'https://booksky-vijay.netlify.app/',
			bg: tertiary,
			text: secondary,
			heading: primary,
		},
	];
	// Make sure that the bg of next div is the previous svg fill
	return (
		<div className="projects-wrapper">
			{/* With project list will traverse and create projects */}
			{projectList.map(
				(
					{
						name,
						about,
						why,
						whatnext,
						imgSrc,
						techStack,
						credentials,
						github,
						live,
						bg,
						text,
						heading,
					},
					index
				) => (
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
									<h5>Future Upgrades</h5>

									<ul className="project-info" style={{ color: text }}>
										{whatnext.map((e, index) => (
											<li key={index}>{e}</li>
										))}
									</ul>
								</div>

								{/* For displaying tech stack used in each project */}
								<div className="project-techStack">
									{techStack.map((e, index) => (
										<img key={index} src={e} alt="broken" />
									))}
								</div>

								{/* For displaying credentials for the site */}
								<div className="project-credentials">
									{credentials.length > 0 ? <h4>Credentails for the live site</h4> : ''}
									{credentials.map(({ email, password }, index) => (
										<p>
											{password === 'Admin@123' ? 'Admin' : 'Doctor'} : {email} - {password}
										</p>
									))}
								</div>

								{/* Button for source code and live link */}
								<div className="project-link-btn">
									<Button variant="outlined" size="large" style={{ borderColor: bgColor }}>
										<a target="_blank" rel="noreferrer" href={live} style={{ color: bgColor }}>
											Live
										</a>
									</Button>
									<Button variant="text" size="large" style={{ borderColor: bgColor }}>
										<a target="_blank" rel="noreferrer" href={github} style={{ color: bgColor }}>
											Github repo
										</a>
									</Button>
								</div>
							</div>

							{/* Project images will be displayed here */}
							<div className="project-img">
								{imgSrc.map((e, index) => (
									<img alt="broken" className={'Layer-' + index + name} src={e} key={index} />
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
