import styled from "styled-components";
import { Breakpoint, Color } from "ui";

const StyledMainTemplate = styled.div`
  display: grid;

  min-height: 100vh;

  background-color: ${Color.DARK_THEME};

  ${Breakpoint.XXS} {
    padding: 32px 24px 48px;
  }

  ${Breakpoint.MD} {
	grid-template-columns: 1fr;
	grid-template-rows: 1fr;

    padding: 40px 40px 56px;
  }

  ${Breakpoint.XXL} {
    grid-template-columns: 20% 80%;
  }
`;

export { StyledMainTemplate };
