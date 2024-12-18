import React from 'react';
import ReactDOM from 'react-dom/client';

import { SignUp } from './pages/SignUp';

import { ThemeProvider } from 'styled-components';

import Theme from './styles/theme';
import GlobalStyles from './styles/global';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ThemeProvider theme={Theme}>
			<GlobalStyles />
			<SignUp />
		</ThemeProvider>
	</React.StrictMode>
);
