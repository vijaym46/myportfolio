import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Mynavbar from './components/navbar/Mynavbar';
import Bottomnav from './components/navbar/Bottomnav';
import { createContext, useState } from 'react';
import { createTheme, Paper, ThemeProvider } from '@mui/material';
import About from './components/main/About';

export const colorContext = createContext(null);

function App() {
	const theme = createTheme({
		palette: {
			// mode: colorMode,
			Dark: {
				bg: '#000000',
				primary: '#ffffff',
				secondary: ' #262424',
				tertiary: '#756f66',
			},
			Coffee: {
				bg: '#211720',
				primary: '#746D63',
				secondary: '#D6904B',
				tertiary: '#746d63',
			},
			Cyberpunk: {
				bg: '#FFEE00',
				primary: '#ff295e',
				secondary: '#333000',
				tertiary: '#756f66',
			},
		},
	});
	const [colorMode, setColorMode] = useState('Cyberpunk');

	const colorThemes = {
		bg: theme['palette'][colorMode].bg,
		primary: theme['palette'][colorMode].primary,
		secondary: theme['palette'][colorMode].secondary,
		tertiary: theme['palette'][colorMode].tertiary,
		setColorMode: setColorMode,
	};

	return (
		<ThemeProvider theme={theme}>
			<colorContext.Provider value={colorThemes}>
				<Paper style={{ background: theme['palette'][colorMode].bg }} elevation={3}>
					<div className="App container-sm">
						<Mynavbar />
						<About />
						<Bottomnav />
					</div>
				</Paper>
			</colorContext.Provider>
		</ThemeProvider>
	);
}

export default App;
