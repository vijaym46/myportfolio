import './../navbar/Mynavbar.css';
import { Navbar, Nav, Offcanvas, NavDropdown } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { useContext } from 'react';
import { colorContext } from './../../App';

function Mynavbar() {
	const { bg, primary, setColorMode } = useContext(colorContext);
	const bgStyle = { backgroundColor: bg };
	const textColor = { color: primary };
	const themeList = ['Dark', 'Coffee', 'Cyberpunk'];

	return (
		<header className="nav-header" style={bgStyle}>
			<Navbar className="mynav-wrapper" expand="sm" style={bgStyle}>
				<Navbar.Brand style={textColor} href="#">
					Portfolio
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="offcanvasNavbar" />

				{/* OffCanvas is used to display side menu for small screens */}
				<Navbar.Offcanvas
					id="offcanvasNavbar"
					aria-labelledby="offcanvasNavbarLabel"
					placement="end"
				>
					<Offcanvas.Header closeButton>
						<Offcanvas.Title style={textColor} id="offcanvasNavbarLabel">
							Portfolio
						</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						<Nav className="justify-content-end flex-grow-1 pe-3">
							<HashLink style={textColor} className="nav-link" to="#about">
								About
							</HashLink>

							<HashLink style={textColor} className="nav-link" to="#projects">
								Projects
							</HashLink>

							<HashLink style={textColor} className="nav-link" to="#contact">
								Contact Me
							</HashLink>
							<NavDropdown title="Theme" id="navbarScrollingDropdown">
								{themeList.map((e, index) => (
									<NavDropdown.Item
										style={textColor}
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
					<HashLink style={textColor} className="nav-link" to="#about">
						About
					</HashLink>

					<HashLink style={textColor} className="nav-link" to="#projects">
						Projects
					</HashLink>

					<HashLink style={textColor} className="nav-link" to="#contact">
						Contact Me
					</HashLink>
					<NavDropdown title="Theme" id="navbarScrollingDropdown">
						{themeList.map((e, index) => (
							<NavDropdown.Item style={textColor} key={index} onClick={() => setColorMode(`${e}`)}>
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
