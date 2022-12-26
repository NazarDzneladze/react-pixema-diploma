import { css } from "styled-components";

export const lightTheme = css`
  html[theme="light"] {
    --white: #242426;
    --dark: #ffffff;
    --graphite: #ffffff;
  }
`;

export const darkTheme = css`
  html[theme="dark"] {
    --white: #ffffff;
    --dark: #242426;
    --graphite: #323537;
  }
`;
