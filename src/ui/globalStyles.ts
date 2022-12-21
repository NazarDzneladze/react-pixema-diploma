import { createGlobalStyle } from "styled-components";
import { resetCSS } from "./reset";
import { darkTheme, lightTheme } from "./theme";

export const GlobalStyles = createGlobalStyle`
	${resetCSS}
	${lightTheme}
	${darkTheme}
`;
