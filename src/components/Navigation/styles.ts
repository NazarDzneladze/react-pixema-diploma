import styled from "styled-components";
import { Breakpoint } from "ui";

const StyledNavigation = styled.nav`
  a {
    display: grid;
    grid-template-columns: 24px 1fr;
    column-gap: 20px;
  }

  ${Breakpoint.XXL} {
    display: grid;
    grid-template-rows: repeat(4, auto);
    row-gap: 40px;
  }
`;

export { StyledNavigation };
