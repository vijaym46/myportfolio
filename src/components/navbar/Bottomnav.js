import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { MdWorkOutline, MdOutlineContacts, MdOutlineHome } from 'react-icons/md';
import { useState } from 'react';

function Bottomnav() {
	const [value, setValue] = useState(0);

	return (
		<Box className="bottom-nav" sx={{ width: 500 }}>
			<BottomNavigation
				showLabels
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue);
				}}
			>
				<BottomNavigationAction label="Home" icon={<MdOutlineHome />} href="#About" />
				<BottomNavigationAction label="Projects" icon={<MdWorkOutline />} href="#projects" />
				<BottomNavigationAction label="Contact Me" icon={<MdOutlineContacts />} href="#contact" />
			</BottomNavigation>
		</Box>
	);
}
export default Bottomnav;
