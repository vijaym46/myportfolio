import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Mynavbar from './components/navbar/Mynavbar';
import Bottomnav from './components/navbar/Bottomnav';
import { createContext, useState } from 'react';
import { createTheme, Paper, ThemeProvider } from '@mui/material';
import About from './components/main/About';
import Projects from './components/main/Projects';
import Experience from './components/main/Experience';
import Footer from './components/main/Footer';
import Myskills from './components/main/Myskills';

export const colorContext = createContext(null);

function App() {
	const [colorMode, setColorMode] = useState('Try');

	const theme = createTheme({
		palette: {
			mode: colorMode === 'Coffee' ? 'dark' : colorMode === 'Dark' ? 'dark' : 'light',
			Dark: {
				bg: '#222831',
				primary: ' #4C4F54',
				secondary: '#fd7014',
				tertiary: '#eeeeee',
			},
			Coffee: {
				bg: '#211720',
				primary: '#dc944c',
				secondary: '#746d63',
				tertiary: '#eeeeee',
			},
			Cyberpunk: {
				bg: '#FFEE00',
				primary: '#A3423C',
				secondary: '#1B1A17',
				tertiary: '#E6D5B8',
			},
			Dream: {
				bg: '#f2cc8f',
				primary: '#81b29a',
				secondary: '#3d405b',
				tertiary: '#e07a5f',
			},
			Toffee: {
				bg: '#fcbf49',
				primary: '#f77f00',
				secondary: '#d62828',
				tertiary: '#003049',
			},
			Light: {
				bg: '#ffffff',
				primary: '#4594D9',
				secondary: '#09090b',
				tertiary: '#dca54c',
			},
			Try: {
				bg: '#DFDDC7',
				primary: '#F58B54',
				secondary: '#A34A28',
				tertiary: '#211717',
			},
		},
	});

	const colorThemes = {
		bg: theme['palette'][colorMode].bg,
		primary: theme['palette'][colorMode].primary,
		secondary: theme['palette'][colorMode].secondary,
		tertiary: theme['palette'][colorMode].tertiary,
		colorMode: colorMode,
		setColorMode: setColorMode,
	};

	return (
		<ThemeProvider theme={theme}>
			<colorContext.Provider value={colorThemes}>
				<Paper style={{ background: theme['palette'][colorMode].bg }} elevation={3}>
					<div className="App">
						<Mynavbar />
						<About />
						<Myskills />
						<Projects />
						<Experience />
						<Footer />
						<Bottomnav />
					</div>
				</Paper>
			</colorContext.Provider>
		</ThemeProvider>
	);
}

export default App;
