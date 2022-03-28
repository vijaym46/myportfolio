import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { MdWorkOutline, MdOutlineContacts, MdOutlineHome } from 'react-icons/md';
import { useState } from 'react';
import { useContext } from 'react';
import { colorContext } from './../../App';

function Bottomnav() {
	const [value, setValue] = useState(0);
	const { primary, bg } = useContext(colorContext);
	const bgStyle = { backgroundColor: bg };
	const textStyle = { color: primary };

	return (
		<Box className="bottom-nav" style={bgStyle} sx={{ width: 500 }}>
			<BottomNavigation
				showLabels
				value={value}
				style={bgStyle}
				onChange={(event, newValue) => {
					setValue(newValue);
				}}
			>
				<BottomNavigationAction
					className="bottomNav-text"
					style={textStyle}
					label="Home"
					icon={<MdOutlineHome />}
					href="#about"
				/>
				<BottomNavigationAction
					className="bottomNav-text"
					style={textStyle}
					label="Projects"
					icon={<MdWorkOutline />}
					href="#projects"
				/>
				<BottomNavigationAction
					className="bottomNav-text"
					style={textStyle}
					label="Contact Me"
					icon={<MdOutlineContacts />}
					href="#contact"
				/>
			</BottomNavigation>
		</Box>
	);
}
export default Bottomnav;
