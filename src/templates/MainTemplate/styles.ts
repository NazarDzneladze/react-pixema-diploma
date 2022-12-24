import styled from "styled-components";
import { Breakpoint, Color } from "ui";

const StyledMainTemplate = styled.div`
  display: grid;
  grid-template-areas:
    "header header"
    "nav content";

  background-color: ${Color.DARK_THEME};

  ${Breakpoint.XXS} {
  }
`;

export { StyledMainTemplate };
