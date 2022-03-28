import { Button, TextField } from '@mui/material';
import './Footer.css';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GrLinkedin, GrGithub, GrMail } from 'react-icons/gr';
import ballons from './../../assets/ballons.svg';
import emailjs from '@emailjs/browser';
import { useRef, useContext } from 'react';
import { colorContext } from './../../App';

toast.configure();

function Footer() {
	const { primary, secondary, tertiary } = useContext(colorContext);
	const bgStyle = { backgroundColor: primary };
	const textStyle = { color: secondary };
	const headingStyle = { color: tertiary };

	const formValidationSchema = yup.object({
		name: yup.string().required('Name is required to send message'),
		email: yup
			.string()
			.email('Must be a valid email address')
			.required('email is required to contact you back'),
		subject: yup.string().required('Subject is required to get a context'),
		message: yup.string().required('Message is required').min(5),
	});

	const { handleChange, handleSubmit, handleBlur, touched, errors, values, resetForm } = useFormik({
		initialValues: {
			name: '',
			email: '',
			subject: '',
			message: '',
		},
		validationSchema: formValidationSchema,
		onSubmit: () => {
			sendMail();
			resetForm();
		},
	});

	const mediaList = [
		{
			name: 'Github',
			link: 'https://github.com/Arun3sh/',
			other: <GrGithub />,
		},
		{
			name: 'Linkedin',
			link: 'https://www.linkedin.com/in/aruneshwaran-m/',
			other: <GrLinkedin />,
		},
		{
			name: 'm.aruneshwar@gmail.com',
			link: 'mailto:m.aruneshwar@gmail.com',
			other: <GrMail />,
		},
	];

	// To send email
	const form = useRef();
	const sendMail = () => {
		emailjs.sendForm('service_g063qck', 'template_anzvuo1', form.current, 'Lm2I4CziF907rc1v9').then(
			(result) => {
				toast.success('email sent successfully');
			},
			(error) => {
				toast.error(error.text);
			}
		);
	};

	return (
		<footer className="footer-wrapper" style={bgStyle}>
			<div className="container-sm footer-wrapper">
				<h3 style={headingStyle}>Contact Me</h3>
				<div className="footer-div">
					<div className="contact-me" style={textStyle}>
						<p className="oppurtunities">
							I’m open to opportunities as Full Stack Developer or Front-end Developer. However, if
							you have other request or question, don’t hesitate to use the form.
						</p>
						<div className="media-container">
							{/* My social profiles */}
							<div className="media-icon">
								{mediaList.map(({ name, link, other }, index) => (
									<span key={index} className="iconTitle">
										{other}
										<a href={link} target="_blank">
											{name}
										</a>
									</span>
								))}
							</div>
							<img src={ballons} alt="ballons" aria-label="ballons" />
						</div>
					</div>

					{/* Form to connect with me */}
					<form ref={form} className="contactme-form" id="contact" onSubmit={handleSubmit}>
						<TextField
							id="name"
							name="name"
							variant="outlined"
							label="name"
							style={textStyle}
							value={values.name}
							onChange={handleChange}
							onBlur={handleBlur}
							error={errors.name && touched.name}
							helperText={errors.name && touched.name ? errors.name : ''}
						/>
						<TextField
							id="email"
							name="email"
							variant="outlined"
							label="email"
							style={textStyle}
							value={values.email}
							onChange={handleChange}
							onBlur={handleBlur}
							error={errors.email && touched.email}
							helperText={errors.email && touched.email ? errors.email : ''}
						/>
						<TextField
							id="subject"
							name="subject"
							variant="outlined"
							label="subject"
							value={values.subject}
							onChange={handleChange}
							onBlur={handleBlur}
							error={errors.subject && touched.subject}
							helperText={errors.subject && touched.subject ? errors.subject : ''}
						/>
						<TextField
							id="message"
							name="message"
							multiline
							rows={4}
							variant="outlined"
							label="message"
							value={values.message}
							onChange={handleChange}
							onBlur={handleBlur}
							error={errors.message && touched.message}
							helperText={errors.message && touched.message ? errors.message : ''}
						/>
						<Button type="submit" variant="outlined">
							Submit
						</Button>
					</form>
				</div>
			</div>
			Copyright © 2022 Aruneshwaran
		</footer>
	);
}

export default Footer;
