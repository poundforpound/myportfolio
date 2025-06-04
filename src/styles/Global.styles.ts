import { projectList } from './../assets/data/Data';
import { createGlobalStyle } from 'styled-components';
import { theme } from './Themes.styles';

export const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
body {
  margin: 0;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
	color: ${theme.colors.font};
	line-height: 1.2;
}

ul{
list-style:none;
}

	a{
	text-decoration: none;
	}
	button{
		cursor: pointer;
		border: none;
		background-color: unset;
	}

	section{
		padding: 100px 0;
	}

	section:nth-of-type(odd){
		background-color: ${theme.colors.primaryBg};
	}
		section:nth-of-type(even){
		background-color: ${theme.colors.secondaryBg};
	}
`;
