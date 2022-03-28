import { Button } from '@mui/material';
import { useState, useContext } from 'react';
import './../main/Experience.css';
import { colorContext } from './../../App';

function Experience() {
	const { primary } = useContext(colorContext);
	const companies = ['HCL', 'Amazon', 'Shakthi Tech'];
	const [compIndex, setCompIndex] = useState(0);
	const experienceList = [
		{
			role: 'Software Engineer',
			timeline: 'Jun 2021 - Present',
			company: 'HCL Technologies Ltd., Chennai',
			resp: [
				'Integrated regulatory and compliance standards into product designs.',
				'Employed coding practices based on commonly accepted standards to establish site layout and user interface.',
				'Planned and engineered RESTful web services to manipulate dynamic datasets.',
				'Assessed UX and UI designs for technical feasibility.',
			],
		},
		{
			role: 'CS Associate',
			timeline: 'Aug 2020 - Feb 2021',
			company: 'Amazon Development Centre India Pvt. Ltd., Coimbatore',
			resp: [
				'Maintained customer satisfaction with forward-thinking strategies focused on addressing customer needs and resolving concerns.',
				'Helped large volume of customers every day with positive attitude and focus on customer satisfaction.',
				'Always analysed customer data in short span of time and assisted accordingly.',
				'Improved customer satisfaction ratings by addressing issues and fostering timely resolution.',
			],
		},
		{
			role: 'Graduate Engineer Trainee -Design',
			timeline: 'Oct 2018 - Nov 2019',
			company: 'Shakthi Tech Manufacturing India Pvt. Ltd., Coimbatore',
			resp: [
				'Supported engineering design development through analysis and simulation of prototypes and 3D computer models.',
				'Created fixture models for helping manufacture new item.',
				'Constant engagement with customer regarding revision of product drawing.',
				'Created CAD drawings using AutoCAD to convey manufacturing and production configurations.',
			],
		},
	];
	const [activeTab, setActiveTab] = useState(0);
	const handleChange = (index) => {
		console.log(index);
		setActiveTab(index);
	};
	return (
		<section className="experience-wrapper">
			<div className="experience-container">
				<h2 className="experience-heading">Where I've worked</h2>
				<div className="experience">
					<div className="companies-tab">
						{companies.map((e, index) => (
							<Button
								key={index}
								tabIndex={index}
								className={index === activeTab ? 'active' : 'notactive'}
								onClick={() => setCompIndex(index) & handleChange(index)}
							>
								{e}
							</Button>
						))}
					</div>
					<GetWorkInfo experienceList={experienceList[compIndex]} />
				</div>
			</div>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
				<path
					fillOpacity="1"
					fill={primary}
					d="M 0,400 C 0,400 0,200 0,200 C 69.5053246307111,181.70113363105463 139.0106492614222,163.40226726210923 203,147 C 266.9893507385778,130.59773273789077 325.4627275850223,116.09206458261764 386,138 C 446.5372724149777,159.90793541738236 509.13844039848846,218.22947440742013 585,226 C 660.8615596015115,233.77052559257987 749.9835108210239,190.99003778770182 828,188 C 906.0164891789761,185.00996221229818 972.9275163174166,221.81037444177258 1046,215 C 1119.0724836825834,208.18962555822742 1198.3064239093096,157.76846444520783 1265,148 C 1331.6935760906904,138.23153555479217 1385.8467880453452,169.1157677773961 1440,200 C 1440,200 1440,400 1440,400 Z"
				></path>
			</svg>
		</section>
	);
}

function GetWorkInfo({ experienceList }) {
	return (
		<div className="about-job">
			<h3 className="job-role">
				{experienceList.role}
				<span className="at-company"> @ {experienceList.company}</span>
			</h3>
			<p>{experienceList.timeline}</p>

			<ul className="resp-ul">
				{experienceList.resp.map((e, index) => (
					<li key={index} className="resp-li">
						{e}
					</li>
				))}
			</ul>
		</div>
	);
}

export default Experience;
