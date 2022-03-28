import './../navbar/Mynavbar.css';
import { Navbar, Nav, Offcanvas, NavDropdown } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { useContext } from 'react';
import { colorContext } from './../../App';

function Mynavbar() {
	const { bg, primary, colorMode, setColorMode } = useContext(colorContext);
	const bgStyle = { backgroundColor: bg };
	const textColor = { color: primary, marginRight: '10px' };
	const offCanvasStyle = { backgroundColor: primary };
	const offCanvasText = { color: bg };

	const themeList = ['Coffee', 'Cyberpunk', 'Dark', 'Dream'];
	const hashLinkList = [
		{
			name: 'About',
			link: '#about',
		},
		{
			name: 'Projects',
			link: '#projects',
		},
		{
			name: 'Contact Me',
			link: '#contact',
		},
	];

	return (
		<header className="nav-header" style={bgStyle}>
			<Navbar className="container-sm mynav-wrapper" expand="sm" style={bgStyle}>
				<Navbar.Brand style={textColor} href="#">
					Portfolio
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="offcanvasNavbar" />

				{/* OffCanvas is used to display side menu for small screens */}
				<Navbar.Offcanvas
					id="offcanvasNavbar"
					aria-labelledby="offcanvasNavbarLabel"
					placement="end"
					style={offCanvasStyle}
				>
					<Offcanvas.Header closeButton>
						<Offcanvas.Title style={offCanvasText} id="offcanvasNavbarLabel">
							Portfolio
						</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						<Nav className="justify-content-end flex-grow-1 pe-3">
							<HashLink style={offCanvasText} className="nav-link" to="#about">
								Home
							</HashLink>

							<NavDropdown
								className="pc-dropDown-side"
								title={`${colorMode}`}
								id="navbarScrollingDropdown"
							>
								{themeList.map((e, index) => (
									<NavDropdown.Item
										style={offCanvasText}
										key={index}
										onClick={() => setColorMode(`${e}`)}
									>
										{e}
									</NavDropdown.Item>
								))}
							</NavDropdown>
						</Nav>
					</Offcanvas.Body>
				</Navbar.Offcanvas>

				{/* For displaying menu items in big screen */}
				<Nav className="myMenu-big me-auto">
					{hashLinkList.map(({ name, link }, index) => (
						<HashLink key={index} style={textColor} className="nav-link" to={link}>
							{name}
						</HashLink>
					))}

					<NavDropdown
						className="pc-dropDown"
						title={`${colorMode}`}
						id="navbarScrollingDropdown"
						style={textColor}
					>
						{themeList.map((e, index) => (
							<NavDropdown.Item
								style={offCanvasText}
								key={index}
								onClick={() => setColorMode(`${e}`)}
							>
								{e}
							</NavDropdown.Item>
						))}
					</NavDropdown>
				</Nav>
			</Navbar>
		</header>
	);
}
export default Mynavbar;
